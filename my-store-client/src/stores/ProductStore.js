import { makeAutoObservable } from "mobx";
import { agent } from "./agent";

export default class ProductStore {
    product = null
    client = agent.Products

    constructor() {
        makeAutoObservable(this);
    }

    createProduct = async (product) =>
        await this.base.simpleRequest(async () => await this.client.createProduct(product));


    getProductsByType = async (type) => {
        const response = await this.client.getProductsByType(type);
        return response;
    }
}