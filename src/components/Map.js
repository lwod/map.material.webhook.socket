import GoogleMap from 'google-map-react'

const Map = ({center, zoom}) => {
	return(
		<div className={'map'}>
			<GoogleMap
				bootstrapURLKeys={{key:'AIzaSyBdDXrVbMRNQ67za2Ci2P_MYDX1OCy7LXE'}}
				defaultCenter={center}
				defaultZoom={zoom}
			>
			
			</GoogleMap>
		</div>
	)
}

Map.defaultProps = {
	center: {
		lat: 42.3265,
		lng: -122.8756
	},
	zoom: 6
}

export default Map
