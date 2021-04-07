import React from 'react'
import './App.css';
import Map from "./components/Map";
import Main from "./context/Main";
import Alert from "./context/Alert";
import {AlertProvider} from "./context/AlertContext";

function App() {
	
	return (
		<AlertProvider>
			<div className="App">
				<Map/>
				
				<Main/>
				<Alert/>
			</div>
		</AlertProvider>
	);
}

export default App;
