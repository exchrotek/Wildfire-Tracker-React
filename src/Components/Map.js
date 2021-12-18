import {useState} from 'react'
import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
let admins = require('../secrets/google_api_key.json')

const Map = ({ center, zoom, eventData }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [clicked, setClicked] = useState(false)

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 'wildfires'){
            return <LocationMarker lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} 
            onClick={() => {
                        //If a new location marker was clicked, don't change Clicked state since the location info box's 
                        // visibility depends on the Clicked state
                        if(locationInfo.id !== ev.id){
                            setClicked(true)
                        }else{
                            setClicked(false)
                        }
                    
                        setLocationInfo({id: ev.id, title:ev.title})
                  
                            }
                    }
              />
        } else{
            return null
        }
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: admins.api_key
                     }}    
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

                {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
                
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} clickedState={clicked} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },

    zoom: 6
}

export default Map
