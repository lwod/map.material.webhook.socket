import React, {useContext, useState, createContext} from 'react'

const NasaEventsContext = createContext()

export const useNasaEvent = ()=>{
	return useContext(NasaEventsContext)
}

export const NasaEventsProvider = ({children})=>{
	const [nasaEvents,setNasaEvents] = useState({
		wildfire: true,
		volcano: false,
	})
	
	const toggle = (category, state)=>{
		
		setNasaEvents({...nasaEvents, [category.toString()]:state})
		
		// if(eventId===8) {
		// 	setNasaEvents({
		// 		...nasaEvents,
		// 		['wildfire']:true,
		// 		['volcano']:false,
		// 	})
		//
		// }
		
		// if(eventId===12){
		// 	setNasaEvents({
		// 		...nasaEvents,
		// 		['wildfire']:false,
		// 		['volcano']:true,
		// 	})

		// }
		
		console.log(nasaEvents)
		
	}
	
	return(
		<NasaEventsContext.Provider value={{
			nasaEvents,
			toggle
		}}>
			{children}
		</NasaEventsContext.Provider>
	)
}