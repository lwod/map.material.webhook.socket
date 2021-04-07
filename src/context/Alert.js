import React from 'react'
import {useAlert} from "./AlertContext";

const Alert = () => {
	const alert = useAlert()
	
	if(!alert.visible) return null
	
	return(
		<div onClick={alert.toggle}>
			<p>alert message</p>
		</div>
	)
}

export default Alert;
