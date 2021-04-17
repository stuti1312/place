
import './App.css';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

function Map() {
  return (
    <GoogleMap
      defaultZoom={20}
      default={{lat:29.4662369, lng:77.6961699}}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement = { <div style={{height: '100%'}} />}
        containerElement = { <div style={{height: '100%'}} />}
        mapElement = { <div style={{height: '100%'}} />}
      />
    </div>
  );
}
