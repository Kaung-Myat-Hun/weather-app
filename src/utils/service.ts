import axios from 'axios';

export const debounceFunc = (callback : (...args:any) => void  , delay : number) => {
    let time :any;
    return (...args : any) =>{
        clearTimeout(time);
        time = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

const key = import.meta.env.VITE_API_KEY;

export const getApiCall = (api: string = "") => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${api}&aqi=yes`
    return axios.get(url)
}

export const getWeatherForecast = (api : string = "") => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${api}&days=7&aqi=yes&alerts=no`
    return axios.get(url)
}