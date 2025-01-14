import React from "react";
import WeatherCard from "../weather/weatherCard";
import styles from "./homePageStyles";
import { getFormattedWeatherData } from "../utils/weatherApi";
import Map from "../map/Map";
import Navbar from "../nav/Nav";

const HomePage = () => {
  //   Mock Data
  const activities = [
    {
      title: "Hiking Trail",
      location: "Mountain View Park",
      difficulty: "Moderate",
    },
    { title: "Beach Volleyball", location: "Sunny Beach", difficulty: "Easy" },
    { title: "Rock Climbing", location: "Adventure Gym", difficulty: "Hard" },
    { title: "Cycling Route", location: "City Trail", difficulty: "Moderate" },
  ];

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.topSection}>
          {/* Map Section */}
          <div style={styles.mapSection}>
            <h2 style={styles.sectionTitle}>Map</h2>
            <div style={styles.mapPlaceholder}>
              <Map />
            </div>
          </div>

          {/* Weather Section */}
          <div style={styles.weatherSection}>
            <h2 style={styles.sectionTitle}>Weather</h2>
            <div style={styles.weatherPlaceholder}>
              <WeatherCard />
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div style={styles.activitiesSection}>
          <h2 style={styles.sectionTitle}>Activities</h2>
          <div style={styles.activitiesGrid}>
            {activities.map((activity, index) => (
              <div key={index} style={styles.activityCard}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {activity.title}
                </h3>
                <p style={{ color: "#666" }}>Location: {activity.location}</p>
                <p style={{ color: "#666" }}>
                  Difficulty: {activity.difficulty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
