import { makeAutoObservable } from "mobx";
import { store } from "./StoresManager";
import { toast } from "react-toastify";
import { agent } from "./agent";

export default class UserStore {
    user = null;

    constructor() {
        makeAutoObservable(this);
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds) => {
        const response = await agent.Auth.login(creds);

        this.base.handleErrors(response);

        console.debug("login successful, token - " + response.value);
        store.commonStore.setToken(response.value);

        return response.isSuccessful;
    };

    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem("jwt");
        this.user = null;
    };

    updateUserInfo = async (user) =>
        await this.base.simpleRequest(async () => await agent.User.updateUser(user));

    confirmEmail = async (key) => {
        const response = await agent.Auth.confirmEmail(key);

        this.base.handleErrors(response);

        return response.isSuccessful;
    }

    register = async (creds) => 
        await agent.Auth.register(creds);

    getAutenticatedUserInfo = async () => {    
        if(this.isLoggedIn) {
            return this.user;
        } else {
            const response = await agent.Auth.getAuthenticatedUserInfo();

            this.base.handleErrors(response);
            
            if(response.value !== null) {
                this.user = response.value;
            }

            return response.value;
        }
    }

    getUserInfo = async (userId) => {
        const response = await agent.User.getUser(userId);

        this.base.handleErrors(response);

        if(response.isSuccessful && !this.otherUsers.includes(response.value)) {
            this.otherUsers.push(response.value);
        }

        return response.value;
    }
}