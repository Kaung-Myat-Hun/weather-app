import { Input } from '../../Input'
import styles from './style.module.css'
import { useState, useContext, useEffect , useCallback } from 'react'
import { WeatherContext , CFContext } from '..'
import { Card, Skeleton } from '../..'

function Left() {

  const {weather, searchCity, city, loading } : any = useContext(WeatherContext)
  const {isCentigrade} = useContext(CFContext)

  const [imageSrc , setImageSrc] = useState<any>("")
  const dateArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


  useEffect(() =>{
    setImageSrc(weather?.current?.condition?.icon || "")
  }, [weather])

  return (
    <div className={styles.container}>
        <Input type="text" name="city" onChange={searchCity} placeholder='Enter City name' className={styles.search} value={city} />
        <div className={styles.topContainer}>
          <div className={styles.iconContainer}>
            {loading ? (
              <Skeleton></Skeleton>
            ) : <img src={imageSrc} alt="" className={styles.icon} />}
          </div>
          <div>
            <div className={styles.textContainer}>
              <h2 className={styles.tempText}>{isCentigrade ? weather?.current?.temp_c || "--" : weather?.current?.temp_f || "--"} 
              {isCentigrade ? 'C': 'F'}&deg;</h2>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.dateText}>{dateArr[new Date(weather?.location?.localtime).getDay()]}/ </p> 
              <p className={styles.timeText}>{weather?.location?.localtime.split(" ")[1]}</p>
            </div>
          </div>
        </div>

      <div className={styles.cardContainer}>
        <Card>
          <div className={styles.locationContainer}>
            <h2 className={styles.regionText}>{weather?.location?.region || ".."}/{weather?.location?.name || ".."}</h2>
            <p className={styles.countryText}>{weather?.location?.country}</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Left