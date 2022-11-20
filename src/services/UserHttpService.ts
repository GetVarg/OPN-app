import axios, { AxiosRequestConfig } from "axios";

class UserHttpService{
    axiosConfig: AxiosRequestConfig;

    constructor(){
        this.axiosConfig = {
            baseURL: 'http://teste-env.eba-tcxtgrep.us-east-1.elasticbeanstalk.com/api/Login',
            headers: {'Content-Type': 'application/json'},
        }
    }

    async login(idn: string){
       await axios.post("/", {params:{"IDN": idn} ,...this.axiosConfig})
    }
}

export default UserHttpService;