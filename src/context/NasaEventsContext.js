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
	
	const toggle = (eventId)=>{
		if(eventId===8) {
			setNasaEvents({
				wildfire: true,
				volcano: false,
			})
		}
		
		if(eventId===12){
			setNasaEvents({
				wildfire: false,
				volcano: true,
			})
		}
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