import { Product } from "./product"

class Task{
    institutionName: string
    goal: string
    product: Product

    constructor(institutionName: string, goal: string, product: Product){
        this.institutionName = institutionName,
        this.goal = goal
        this.product = product
    }
}
export default Task;