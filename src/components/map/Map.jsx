import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ lat, lon, weatherData}) => {
  // Locations from permissions
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  console.log("Name of the location", weatherData?.city || "No city data available");

  // Fallback location
  const fallbackLat = 48.8566;
  const fallbackLon = 2.3522;

  // Weather location (priority)
  const weatherLat = lat;
  const weatherLon = lon;

  // Set default values if lat and lon are not provided
  const defaultLat = 48.8566;
  const defaultLon = 2.3522;

  // Use provided lat/lon or default values
  const currentLat = weatherLat || location?.lat || fallbackLat;
  const currentLon = weatherLon || location?.lon || fallbackLon;

  // Dynamically create markers using lat and lon props or default values
  const markers = [
    {
      geocode: [currentLat, currentLon], // Use the provided or default lat/lon
      popUp: weatherData && weatherData.city ? weatherData.city : null
    },
    {
      geocode: [fallbackLat, fallbackLon],
      popUp: "GoQuest Headquaters",
    },
  ];

  // Ask user permissions
  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude }); // Save the location
          setError(null); // Clear any previous errors
        },
        (err) => {
          setError(err.message); // Set error message
        }
      );
    } else {
      setError("Geolocation is not supported in your browser");
    }
  };

  useEffect(() => {
    if (!weatherLat || !weatherLon) {
      requestLocation(); // Request location if weather location is not provided
    }
  }, [weatherLat, weatherLon]);

  console.log("Location from permissions:", location);

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
