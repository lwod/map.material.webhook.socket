import React from 'react'
import {useAlert} from "./AlertContext";

const Main = ()=>{
	const {toggle} = useAlert()
	return(
		<div>
			<button onClick={toggle}>btn</button>
		</div>
	)
}

export default Main

