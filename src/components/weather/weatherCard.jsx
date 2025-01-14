import React, { useEffect, useState } from 'react';
import { Search, Droplets, Wind, Thermometer, Sun, Cloud } from 'lucide-react';
import styles from './weatherCardStyles';
import { getFormattedWeatherData } from '../utils/weatherApi';

const WeatherCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch weather data when the search query changes
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!searchQuery) return; // Do not fetch if search query is empty

      try {
        const units = "metric"; // Use metric for temperature in Celsius
        const geocodeURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=d7c757ee7b3a22b8f08a5822bcc1a414&units=${units}`;
        const geoResponse = await fetch(geocodeURL);
        const geoData = await geoResponse.json();

        if (geoResponse.status === 404) {
          setError("City not found");
          return;
        }

        const { lat, lon } = geoData.coord; // Get latitude and longitude for the city

        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d7c757ee7b3a22b8f08a5822bcc1a414&units=${units}`;
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

        setWeatherData({
          condition: forecastData.list[0].weather[0].description,
          humidity: `${forecastData.list[0].main.humidity}%`,
          windSpeed: `${forecastData.list[0].wind.speed} m/s`,
          temperature: `${forecastData.list[0].main.temp}°C`,
        });

        // Extract 5-day forecast data
        const fiveDayForecast = forecastData.list.filter((_, index) => index % 8 === 0) // Every 8th entry corresponds to a daily forecast
          .map(item => ({
            date: new Date(item.dt * 1000).toLocaleDateString(),
            description: item.weather[0].description,
            icon: item.weather[0].icon,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
          }));

        setForecastData(fiveDayForecast);
        setError(null); // Reset error if data is successfully fetched
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data");
      }
    };

    fetchWeatherData();
  }, [searchQuery]); // Re-fetch data when the search query changes

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div style={styles.container}>
      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <Search size={20} style={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search location..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={styles.searchInput}
        />
      </div>

      {/* Error message */}
      {error && <div style={styles.errorMessage}>{error}</div>}

      {/* Current Weather Grid */}
      {weatherData && (
        <div style={styles.currentWeatherGrid}>
          {/* Weather Condition */}
          <div style={styles.weatherTile}>
            <Sun size={24} style={styles.tileIcon} />
            <span style={styles.tileValue}>{weatherData.condition}</span>
            <span style={styles.tileLabel}>Current Weather</span>
          </div>

          {/* Humidity */}
          <div style={styles.weatherTile}>
            <Droplets size={24} style={styles.tileIcon} />
            <span style={styles.tileValue}>{weatherData.humidity}</span>
            <span style={styles.tileLabel}>Humidity</span>
          </div>

          {/* Wind Speed */}
          <div style={styles.weatherTile}>
            <Wind size={24} style={styles.tileIcon} />
            <span style={styles.tileValue}>{weatherData.windSpeed}</span>
            <span style={styles.tileLabel}>Wind Speed</span>
          </div>

          {/* Temperature */}
          <div style={styles.weatherTile}>
            <Thermometer size={24} style={styles.tileIcon} />
            <span style={styles.tileValue}>{weatherData.temperature}</span>
            <span style={styles.tileLabel}>Temperature</span>
          </div>
        </div>
      )}

      {/* Weekly Forecast */}
      {forecastData.length > 0 && (
        <div style={styles.forecastContainer}>
          {forecastData.map((day, index) => (
            <div key={index} style={styles.forecastTile}>
              <span style={styles.dayLabel}>{day.date}</span>
              <div style={styles.weatherIcon}><img src={`http://openweathermap.org/img/wn/${day.icon}.png`} alt={day.description} /></div>
              <span style={styles.temperature}>{`${day.temp_min}°C - ${day.temp_max}°C`}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;

