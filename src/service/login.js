import axios from "axios";

class LoginService{
    static async login(account){
        return await axios.post("http://localhost:8080/login", account);
    }

    static async logout(){
        localStorage.setItem("account", "");
        localStorage.setItem("token", "");
    }
}
export default LoginService;