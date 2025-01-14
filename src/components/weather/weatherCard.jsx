import React, { useState } from 'react';
import { Search, Droplets, Wind, Thermometer, Sun, Cloud } from 'lucide-react';
import styles from './weatherCardStyles';

const WeatherCard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data
  const currentWeather = {
    condition: 'Sunny',
    humidity: '65%',
    windSpeed: '8 mph',
    temperature: '72°F',
  };

  const forecast = [
    { day: 'MON', temp: '75°F', icon: <Sun size={20} /> },
    { day: 'TUE', temp: '73°F', icon: <Cloud size={20} /> },
    { day: 'WED', temp: '68°F', icon: <Cloud size={20} /> },
    { day: 'THU', temp: '70°F', icon: <Sun size={20} /> },
    { day: 'FRI', temp: '72°F', icon: <Sun size={20} /> },
    { day: 'SAT', temp: '69°F', icon: <Cloud size={20} /> },
    { day: 'SUN', temp: '71°F', icon: <Sun size={20} /> },
  ];

  return (
    <div style={styles.container}>
      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <Search size={20} style={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* Current Weather Grid */}
      <div style={styles.currentWeatherGrid}>
        {/* Weather Condition */}
        <div style={styles.weatherTile}>
          <Sun size={24} style={styles.tileIcon} />
          <span style={styles.tileValue}>{currentWeather.condition}</span>
          <span style={styles.tileLabel}>Current Weather</span>
        </div>

        {/* Humidity */}
        <div style={styles.weatherTile}>
          <Droplets size={24} style={styles.tileIcon} />
          <span style={styles.tileValue}>{currentWeather.humidity}</span>
          <span style={styles.tileLabel}>Humidity</span>
        </div>

        {/* Wind Speed */}
        <div style={styles.weatherTile}>
          <Wind size={24} style={styles.tileIcon} />
          <span style={styles.tileValue}>{currentWeather.windSpeed}</span>
          <span style={styles.tileLabel}>Wind Speed</span>
        </div>

        {/* Temperature */}
        <div style={styles.weatherTile}>
          <Thermometer size={24} style={styles.tileIcon} />
          <span style={styles.tileValue}>{currentWeather.temperature}</span>
          <span style={styles.tileLabel}>Temperature</span>
        </div>
      </div>

      {/* Weekly Forecast */}
      <div style={styles.forecastContainer}>
        {forecast.map((day, index) => (
          <div key={index} style={styles.forecastTile}>
            <span style={styles.dayLabel}>{day.day}</span>
            <div style={styles.weatherIcon}>{day.icon}</div>
            <span style={styles.temperature}>{day.temp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;