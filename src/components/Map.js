import React, {useState, useEffect} from 'react'
import GoogleMap from 'google-map-react'
import LocationMarker from "./LocationMarker";
import {useNasaEvent} from "../context/NasaEventsContext";

const Map = ({center, zoom}) => {
	
	const nasa = useNasaEvent()
	const [nasaEvent, setNasaEvent] = useState('wildfire')
	
	useEffect(()=>{
		if(nasa.nasaEvents.wildfire){
			setNasaEvent('wildfire')
		}
		if(nasa.nasaEvents.volcano){
			setNasaEvent('volcano')
		}
		// console.log(nasa.nasaEvents)
	},[nasa.nasaEvents])
	
	return(
		<div className={'map'}>
			<GoogleMap
				bootstrapURLKeys={{key:'AIzaSyBdDXrVbMRNQ67za2Ci2P_MYDX1OCy7LXE'}}
				defaultCenter={center}
				defaultZoom={zoom}
			>
				<LocationMarker
					lat = {center.lat}
					lng = {center.lng}
					nasaEventType={nasaEvent}
				/>
			</GoogleMap>
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
