import styles from './style.module.css'
import Left from './Left/Left'
import Right from './RIght/Right'
import { useContext, useEffect, createContext , useState, useCallback } from 'react'
import { LocationContext } from '../../App'
import { debounceFunc, getApiCall, getWeatherForecast } from '../../utils/service'

export const WeatherContext = createContext({});
export const CFContext = createContext<any>(null)

export const Layout = () => {
  const locationData = useContext(LocationContext);
  const [weather, setWeather] = useState<any>();
  const [weatherSec, setWeatherSec] = useState<any>();
  const [isCentigrade, setIsCentigrade] = useState(true)
  const [imageSrc , setImageSrc] = useState<any>("")
  const [city , setCity] = useState("")
  const [loading, setLoading] = useState(false)

  const apiFunc = () => {
    setLoading(true)
    if(locationData){
      getApiCall(locationData).then((response) => {
        setWeather(response.data)
        setLoading(false)
      }).catch(err => console.log(err))
      getWeatherForecast(locationData).then(res => {
        setWeatherSec(res.data)
      }).then(err => {
        console.log(err)
      })
    }else{
      console.log('not called')
    }
  }

  // delay the apicall with debounce function to avoid multiple api fetch
  const debouncedSearch = useCallback(debounceFunc(async (value) => {
    setLoading(true)
      const [first, second] = await Promise.all([
        getApiCall(value),
        getWeatherForecast(value)
      ])
      setLoading(false)
      setImageSrc(first?.data?.current?.condition?.icon || "")
      setWeather(first?.data)
      setWeatherSec(second?.data)
    }, 500), [])

    const searchCity = (e:any) => {
      if(e.target.value !== ""){
        setCity(e.target.value)
        debouncedSearch(e.target.value)
      }else{
        // input value is empty string reset to first api call
        setCity("")
        debouncedSearch("")
        apiFunc();
      }
    }

  useEffect(() =>{
    apiFunc()
  }, [locationData])

  // use context api to control the data passing through the components
  return (
    <WeatherContext.Provider value={{weather, searchCity, city , weatherSec, loading , imageSrc}}>
      <CFContext.Provider value={{isCentigrade, setIsCentigrade}}>
          <div className={styles.container}>
            <Left />
            <Right />
          </div>
        </CFContext.Provider>
    </WeatherContext.Provider>
  )
}

export default Layout