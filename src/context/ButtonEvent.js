import React, {useState, useEffect} from 'react'
import {useNasaEvent} from "./NasaEventsContext";

const ButtonEvent = () => {
	const {toggle} = useNasaEvent()
	
	const [eventId, setEventId] = useState(8)
	
	const clickHandler = () => {
		toggle(eventId)
		if(eventId == 8){setEventId(12)}
		if(eventId == 12){setEventId(8)}
	}
	
	return(
		<div>
			<button onClick={clickHandler}>event change</button>
		</div>
	)
}

export default ButtonEvent
