import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "b18e798ff377ef49f1c335283e7c43d6",
        language: "ko-KR"
    }
})

export default instance;