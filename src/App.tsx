import './App.css';
import { Layout } from './Components';
import { createContext, useEffect, useState } from 'react';

export const LocationContext = createContext("");

function App() {

  // get geo location data from your machine and store at the state and make context api
  const [locationData, setLocationData] = useState("")

  useEffect(() => {
    position();
  }, [locationData])

  const position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => setLocationData(
        position.coords.latitude + "," +
        position.coords.longitude
      ), 
      err => console.log(err)
    );
  }

  return (
    <LocationContext.Provider value={locationData}>
      <Layout />
    </LocationContext.Provider>
  )
}

export default App