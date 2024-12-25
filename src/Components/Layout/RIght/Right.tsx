import styles from './style.module.css'
import { useContext, useEffect, useState } from 'react'
import { Card, CFContext, Skeleton, WeatherContext } from '../..'
import { Input } from '../../Input'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import direction from '../../../assets/icons/direction.svg'

function Right() {
  const {isCentigrade, setIsCentigrade} = useContext(CFContext)

  const [forecastData, setForecastData] = useState([])
  
  const [todayData, setTodayData] = useState<any>(null)

  const {weatherSec, loading} : any = useContext(WeatherContext)

  const DateArr = ["Sun", "Mon" ,"Tue", "Wed", "Thu", "Fri", "Sat"]

  useEffect(() =>{
      setForecastData(weatherSec?.forecast?.forecastday)
      setTodayData(weatherSec?.current)
  }, [weatherSec])

  const changedHandler = () => {
    setIsCentigrade(!isCentigrade)
  }

  return (
    <div className={styles.container}>
      <Input id="centigrade" type="radio" checked={isCentigrade} onChange={changedHandler} hidden />
      <Input id="fahrenheit" type="radio" checked={!isCentigrade} onChange={changedHandler} hidden />
      <div className={styles.top}>
        <h4>1 Week Forecasting</h4>
        <div className={styles.labelContainer}>
          <label htmlFor="centigrade" className={isCentigrade ? styles.active : styles.labelButton}> C&deg;</label>
          <label htmlFor="fahrenheit" className={!isCentigrade ? styles.active : styles.labelButton}> F&deg;</label>
        </div>
      </div>
      <div className={styles.forecastContainer}>
      {
        loading ? (
          Array(7).fill(0).map((item) => (
            <Skeleton key={item}></Skeleton>
          ))
        ) : (
          <>{
            forecastData?.map((item :any , i: number) => (
              <Card key={i}>
                <div className={styles.cardInnerContainer}>
                  <div>
                    <small className={styles.dayText}>{new Date(item.date).getDate()}</small>
                    <h3 className={styles.dayText}>{DateArr[new Date(item.date).getDay()]}</h3> 
                  </div>
                  <img src={item?.day?.condition?.icon} className={styles.icon} />
                  <h4 className={styles.tempText}>{isCentigrade ? Math.round(item?.day?.mintemp_c) : Math.round(item?.day?.mintemp_f)}&deg; ~&nbsp;
                    {isCentigrade ? Math.round(item?.day?.maxtemp_c) : Math.round(item?.day?.maxtemp_f)}&deg; </h4>
                </div>
            </Card>
          ))
          }</>
        )
      }
      </div>
      <h3 className={styles.hightlightText}>Today Hightlight</h3>
      <div className={styles.hightLightContainer}>
        {loading ? (
          Array(4).fill(0).map((item) => <Skeleton key={item}></Skeleton>)
        ) : (
          <>
            <Card>
            <div className={styles.innerContainer}>
              <small className={styles.title}>Condition</small>
              <div className={styles.progressContainer}>
                <img src={todayData?.condition?.icon} alt='' className={styles.hightLightImage} />
              </div>
                <h4 className={styles.normalText}>{todayData?.condition?.text}</h4>
            </div>
          </Card>
          <Card>
            <div className={styles.innerContainer}>
              <small className={styles.title}>UV Index</small>
              <div className={styles.progressContainer}>
                <CircularProgressbar value={todayData?.uv} text={`${todayData?.uv}%`} />
              </div>
            </div>
          </Card>
          <Card>
            <div className={styles.innerContainer}>
              <small className={styles.title}>Humidity</small>
              <div className={styles.progressContainer}>
                <CircularProgressbar value={todayData?.humidity} text={`${todayData?.humidity}%`} />
              </div>
                <h4 className={styles.normalText}>{todayData?.humidity > 50 ? "Moist" : "Dry" }</h4>
            </div>
          </Card>
          <Card>
            <div className={styles.innerContainer}>
              <small className={styles.title}>Wind Status</small>
              <img src={direction} alt="" style={{transform: `rotate(${todayData?.wind_degree}deg)`}} className={styles.windIcon} />
              <div className={styles.progressContainer}>
              </div>
                <div className={styles.directionText}>
                  <h4 className={styles.directionTextH4}>Direction : {todayData?.wind_dir} </h4><small>{todayData?.wind_degree}&deg;</small>
                </div>
                <div className={styles.directionText}>
                  <h4 className={styles.directionTextH4}>Direction : {todayData?.wind_kph} </h4><small>K/h</small>
                </div>
                <div className={styles.directionText}>
                  <h4 className={styles.directionTextH4}>Direction : {todayData?.wind_mph} </h4><small>M/h</small>
                </div>
            </div>
          </Card>
          </>
        )}
      </div>
    </div>
  )
}

export default Right