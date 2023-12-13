import { makeAutoObservable } from "mobx";
import { agent } from "./agent";

export default class OrderStore {
    order = null;
    client = agent.Orders

    constructor() {
        makeAutoObservable(this);
    }

    createOrder = async (order) =>
        await this.client.createOrder(order); 
}