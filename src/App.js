import React from 'react'
import './App.css';
import Map from "./components/Map";
import Main from "./context/Main";
import Alert from "./context/Alert";
import {AlertProvider} from "./context/AlertContext";
import {NasaEventsProvider} from "./context/NasaEventsContext";
import ButtonEvent from "./context/ButtonEvent";

function App() {
	
	return (
		<NasaEventsProvider>
			<div className="App">
				<Map/>
				<ButtonEvent/>
				
				{/*<Main/>*/}
				{/*<Alert/>*/}
			</div>
		</NasaEventsProvider>
	);
}

export default App;
