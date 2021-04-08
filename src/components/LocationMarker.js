import React, {useEffect, useState} from 'react'
import {Icon} from '@iconify/react'
import wildfire from '@iconify/icons-mdi/fire-alert'
import volcano from '@iconify-icons/maki/volcano-11'

const LocationMarker = ({lat, lng, nasaEventType, onClick}) => {

	const [icon, setIcon] = useState(wildfire)
	useEffect(()=>{
		switch (nasaEventType){
			case 'wildfire' : setIcon(wildfire); break;
			case 'volcano' : setIcon(volcano); break;
		}
	}, [nasaEventType])
	
	return(
		<div className={'location-marker'} onClick={onClick}>
			<Icon icon = {icon} className = "location-icon"/>
		</div>
	)
}

export default LocationMarker