import './App.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import teslaData from './data/tesla-sites.json';

function App() {
  return (
    <MapContainer center={[41.0122, 28.976]} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {teslaData.map((location) => (
        <Marker
          key={location.id}
          position={[location.gps.latitude, location.gps.longitude]}
        >
          <Popup>
            <div>
              <h2>{location.name}</h2>
              <p>{`Status: ${location.status}`}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
