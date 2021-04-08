import React from 'react'
import './App.css';
import Map from "./components/Map";
import {NasaEventsProvider} from "./context/NasaEventsContext";
import ButtonEvent from "./context/ButtonEvent";
import FireBtn from "./context/FireBtn";
import VolcanoBtn from "./context/VolcanoBtn";

function App() {
	
	return (
		<NasaEventsProvider>
			<div className="App">
				<Map/>
				<FireBtn/>
				<VolcanoBtn/>
			</div>
		</NasaEventsProvider>
	);
}

export default App;
