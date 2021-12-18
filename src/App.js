import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import { useState, useEffect } from 'react'
import Loader from './Components/Loader';


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      // await guarantees a promise be returned from the fetch
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)      

    }

    fetchEvents()

    //for debuggin
    // console.log('eventData')
    // console.log(eventData)
  }, [])



  return (
    <div classname='mains'>
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
      
    </div>
  );
}

export default App;
