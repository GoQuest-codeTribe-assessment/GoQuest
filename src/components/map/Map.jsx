import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ lat, lon }) => {
  console.log(lat, lon);

  // Set default values if lat and lon are not provided
  const defaultLat = 48.8566;
  const defaultLon = 2.3522;

  // Use provided lat/lon or default values
  const currentLat = lat || defaultLat;
  const currentLon = lon || defaultLon;

  // Dynamically create markers using lat and lon props or default values
  const markers = [
    {
      geocode: [currentLat, currentLon], // Use the provided or default lat/lon
      popUp: "Hello, I am a pop up",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am a Pop up 2",
    },
  ];

  return (
    <MapContainer
      center={[currentLat, currentLon]} // Center the map on the dynamic coordinates
      zoom={13}
      style={{ height: "100%", width: "100%" }} // You can adjust the height and width here
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))
      }
    </MapContainer>
  );
};

export default Map;
