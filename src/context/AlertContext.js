import React, {createContext, useState, useContext} from 'react'

const AlertContext = createContext()

export const useAlert = () => {
	return useContext(AlertContext)
}


export const AlertProvider = ({children}) => {
	const [alert, setAlert] = useState(false)
	const toggle = () => setAlert(prev => !prev)
	
	
	return (
		<AlertContext.Provider value={{
			visible:alert,
			toggle:toggle
		}}>
				{children}
		</AlertContext.Provider>
	)
}
