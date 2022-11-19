import axios, { AxiosRequestConfig } from "axios";

class createTask{
    axiosConfig: AxiosRequestConfig;
    constructor(){
        this.axiosConfig = {
            baseURL: 'http://teste-env.eba-tcxtgrep.us-east-1.elasticbeanstalk.com/api/Task/CreateRandomTask'
        }
    }
    async getTask(idn:string){
        await axios.get("/", {params:{"IDN": idn} ,...this.axiosConfig})
    }
}
export default createTask;