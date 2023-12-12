import { makeAutoObservable } from "mobx";
import { agent } from "./agent";

export default class ProductStore {
    product = null
    cartProducts = []
    client = agent.Products

    constructor() {
        makeAutoObservable(this);
    }

    createProduct = async (product) =>
        await this.client.createProduct(product); 


    getProductsByType = async (type) => {
        const response = await this.client.getProductsByType(type);
        return response;
    }

    removeProduct = async (id, type) => {
        await this.client.removeProduct(id);
        await this.client.getProductsByType(type); 
    }

    addProductToCart = async (product) => {
        this.cartProducts.push(product);
        console.log(this.cartProducts)
    }

}