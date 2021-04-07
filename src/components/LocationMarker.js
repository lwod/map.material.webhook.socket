import React from 'react'
import {Icon} from '@iconify/react'
import wildfire from '@iconify/icons-mdi/fire-alert'
import volcano from '@iconify-icons/maki/volcano-11'

const LocationMarker = ({lat, lng, onClick}) => {
	return(
		<div className={'location-marker'} onClick={onClick}>
			<Icon icon = {wildfire} className = "location-icon"/>
		
		</div>
	)
}

export default LocationMarker