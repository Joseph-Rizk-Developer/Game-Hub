import axios from "axios";      

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9c069d9f706247a4b693383c856b9613"
    }
})