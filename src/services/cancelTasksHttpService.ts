import axios, { AxiosRequestConfig } from "axios";

class cancelTasksHttpService{
    axiosConfig:  AxiosRequestConfig;
    constructor(){
        this.axiosConfig = {
            baseURL: 'http://teste-env.eba-tcxtgrep.us-east-1.elasticbeanstalk.com/api/Task/CancelTask'
        }
    }
    async cancelTask(idn:string){
        await axios.put("/", {}, {params:{"IDN": idn} ,...this.axiosConfig})
    }
}
export default cancelTasksHttpService;