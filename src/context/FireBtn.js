import React, {useState, useEffect} from 'react'
import {useNasaEvent} from "./NasaEventsContext";

const FireBtn = () => {
	const {toggle} = useNasaEvent()
	
	const [event, setEvent] = useState(false)
	
	const clickHandler = () => {
		toggle('wildfire', event)
		setEvent(!event)
	}
	
	return(
		<div>
			<button onClick={clickHandler}>Fire</button>
		</div>
	)
}

export default FireBtn
