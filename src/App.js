import React from 'react'
import './App.css';
import Map from "./components/Map";
import {NasaEventsProvider} from "./context/NasaEventsContext";
import ButtonEvent from "./context/ButtonEvent";

function App() {
	
	return (
		<NasaEventsProvider>
			<div className="App">
				<Map/>
				<ButtonEvent/>
			</div>
		</NasaEventsProvider>
	);
}

export default App;
