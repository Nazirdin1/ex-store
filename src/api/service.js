import axios from "../axios" 

class StoreService{
    getAllCategories(){
        return axios.get("/categories")
    }

    getAllUsers(){}
}

 export default new StoreService()