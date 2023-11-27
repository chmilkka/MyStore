import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { store } from "./StoresManager";
import { redirect } from "react-router-dom";



axios.defaults.baseURL = "https://localhost:3000/api";

axios.interceptors.request.use((config) => {
    const token = store.commonStore.token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axios.interceptors.response.use(async (response) => response,
    (error) => {
        const { data, status, headers } = error.response;
        switch (status) {
            case 400:
                if (data.errors) {
                    console.log(data);
                    const modalStateErrors = [];

                    for (const key in data.errors) {
                        if (data.errors[key]) {
                            toast.error((data.errors[key])[0]);
                            modalStateErrors.push(data.errors[key]);
                        }
                    }
                    throw modalStateErrors.flat();
                } else {
                    toast.error(data.errors);
                }
                break;
            case 401:
                console.log(401)
                if (headers['www-authenticate'].startsWith('Bearer error="invalid_token"')) {
                    store.userStore.logout();
                    toast.error('Session has expired - please login again');
                }
                break;
            case 404:
                redirect("/notFound");
                break;
            case 500:
                data.errors.map(e => toast.error(e.detail));                
                break;
        }

        return Promise.reject(error);
    }
);

const responseBody = (response) => response.data;

const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body = {}) => axios.post(url, body).then(responseBody),
    put: (url, body = {}) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
    patch: (url) => axios.patch(url).then(responseBody),
};

const Auth = {
    login: (body) => requests.post("/authentication/login", body),
    register: (body) => requests.post("/authentication/register", body),
    getAuthenticatedUserInfo: () => requests.get("/authentication"),
    confirmEmail: (key) => requests.patch(`/authentication/confirmEmail/${key}`)
}

const User = {
    updateUser: (body) => requests.put("/user", body),
    getUser: (id) => requests.get(`/user/${id}`),
    removeUser: (id) => requests.delete(`/user/${id}`),
}

export const agent = {
    Auth,
    User,
};