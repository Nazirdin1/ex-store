// // import axios from "../axios"

// // class StoreService {
// //     getAllCategories(){
// //         return axios.get("/categories")
// //     }

// //     getCategoryById (id) {
// //         return axios.get(`categories/${id}/products`)
// //     }

// //     getAllUsers(){}
// // }


// // export default new StoreService()



// import axios from "../axios";

// class StoreService {
//   getAllCategories() {
//     return axios.get("/categories");
//   }

//   getCategoryById(id) {
//     return axios.get(`/categories/${id}/products`);
//   }

//   getProductById(id) {
//     return axios.get(`/products/${id}`);
//   }
//   getProductAll() {
//     return axios.get(`/products`);
//   }

//   getAllUsers() {
//     return axios.get("/users"); // Метод заглушка, если нужен, можно реализовать
//   }
// }

// export default new StoreService();




import axios from "../axios";

class StoreService {
  getAllCategories() {
    return axios.get("/categories");
  }

  getCategoryById(id) {
    return axios.get(`/categories/${id}/products`);
  }

  getAllProducts() {
    return axios.get(`/products`);
  }

  // Другие методы для работы с данными, если необходимо
}

export default new StoreService();
