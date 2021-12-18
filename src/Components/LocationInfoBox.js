import React from 'react'

const LocationInfoBox = ({info, clickedState}) => {
    let content;
    if(clickedState){
        content = (
            <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
            </ul>
        </div>
        )
    } else{
        content = <div></div>
    }
    return (
        content
    )
}

export default LocationInfoBox
