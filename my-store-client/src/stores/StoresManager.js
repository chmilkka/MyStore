import { createContext, useContext } from "react";
import CommonStore from "./CommonStore";
import UserStore from "./UserStore";
import ProductStore from "./ProductStore";
import OrderStore from "./OrderStore";


export class Store  {
    commonStore = new CommonStore();
    userStore = new UserStore();
    productStore = new ProductStore();
    orderStore = new OrderStore();   
}

export const store = new Store();

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}