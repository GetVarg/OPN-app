import axios, { AxiosRequestConfig } from "axios";

class CompletedHttpService{
    axiosConfig: AxiosRequestConfig;

    constructor(){
        this.axiosConfig = {
            baseURL: 'http://teste-env.eba-tcxtgrep.us-east-1.elasticbeanstalk.com/api/Task/CompleteTask',
        }
    }

    async completed(idn: string){
       await axios.post("/", {}, {params:{"idn": idn} ,...this.axiosConfig})
    }
}

export default CompletedHttpService;