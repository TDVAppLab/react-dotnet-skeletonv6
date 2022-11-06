import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:5001"; 


axios.interceptors.request.use(config => {
    const token = window.localStorage.getItem('react_dotnet_skelton_jwt_token');
    if(token) config.headers!.Authorization = `Bearer ${token}`
    return config;
})

const WeatherForecast = {
    index: () => axios.get<any>(`/weatherforecast`).then((response: AxiosResponse<any>)=>response.data),
}



const api = {
    WeatherForecast,
}

export default api;