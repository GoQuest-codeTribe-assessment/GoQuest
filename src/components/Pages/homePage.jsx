import React from "react";
import WeatherCard from "../weather/weatherCard";
import styles from "./homePageStyles";
import { getFormattedWeatherData } from "../utils/weatherApi";
import Map from "../map/Map";
import cosy from "../../assets/cosy.jpg"

const HomePage = () => {
  //   Mock Data
  const activities = [
    {
      title: "Hiking Trail",
      location: "Mountain View Park",
      difficulty: "Moderate",
      image: cosy,
    },
    {
      title: "Beach Volleyball",
      location: "Sunny Beach",
      difficulty: "Easy",
      image: cosy ,
    },
    {
      title: "Rock Climbing",
      location: "Adventure Gym",
      difficulty: "Hard",
      image: cosy ,
    },
    {
      title: "Cycling Route",
      location: "City Trail",
      difficulty: "Moderate",
      image: cosy ,
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
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
              <div
                key={index}
                style={{
                  ...styles.activityCard,
                  backgroundImage: `url(${activity.image})`,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {activity.title}
                </h3>
                <p style={{ color: "white" }}>Location: {activity.location}</p>
                <p style={{ color: "white" }}>
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
