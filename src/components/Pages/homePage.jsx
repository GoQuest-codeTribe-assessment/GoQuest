import React, { useEffect, useState } from "react";
import WeatherCard from "../weather/weatherCard";
import styles from "./homePageStyles";
import { getFormattedWeatherData } from "../utils/weatherApi";
import Map from "../map/Map";
import cosy from "../../assets/cosy.jpg";

const HomePage = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  console.log("Name of the location", weatherData?.city || "No city data available");


  const activities = [
    {
      id: 1,
      name: "Hiking in the Mountains",
      description: "Explore scenic trails and enjoy breathtaking views.",
      locationType: "Outdoor",
      weatherTags: ["sunny", "cloudy", "clear"],
      temperatureMin: 15,
      temperatureMax: 30,
      recommendation: "Bring plenty of water and sunscreen.",
      region: "Any mountainous area",
      imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
    {
      id: 2,
      name: "Museum Visit",
      description: "Discover art, history, and culture indoors.",
      locationType: "Indoor",
      weatherTags: ["rainy", "stormy"],
      temperatureMin: null,
      temperatureMax: null,
      recommendation: "Check opening hours before visiting.",
      region: "Urban areas",
      imageUrl:
        "https://unsplash.com/photos/white-and-blue-building-during-daytime-OHmKXLnnfpg",
    },
    {
      id: 3,
      name: "Beach Day",
      description: "Relax by the sea, swim, or try water sports.",
      locationType: "Outdoor",
      weatherTags: ["sunny", "hot", "clear"],
      temperatureMin: 25,
      temperatureMax: 40,
      recommendation: "Don’t forget a hat, sunglasses, and sunscreen.",
      region: "Coastal regions",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 4,
      name: "Cycling",
      description: "Ride through parks, trails, or city streets.",
      locationType: "Outdoor",
      weatherTags: ["sunny", "partly cloudy", "breezy", "clear"],
      temperatureMin: 10,
      temperatureMax: 25,
      recommendation: "Wear a helmet and check your bike beforehand.",
      region: "Suburban or urban areas",
      imageUrl: "https://images.unsplash.com/photo-1516466723873-2d87971c0218",
    },
    {
      id: 5,
      name: "Cooking Class",
      description: "Learn to cook local or international cuisines.",
      locationType: "Indoor",
      weatherTags: ["rainy", "cold", "snowy"],
      temperatureMin: null,
      temperatureMax: null,
      recommendation: "Book a class in advance.",
      region: "Urban areas or resorts",
      imageUrl: "https://images.unsplash.com/photo-1601050692452-e759bbf90f9e",
    },
    {
      id: 6,
      name: "Snowboarding",
      description: "Hit the slopes and enjoy the snow.",
      locationType: "Outdoor",
      weatherTags: ["snowy", "cold"],
      temperatureMin: -10,
      temperatureMax: 5,
      recommendation: "Wear warm clothing and bring your gear.",
      region: "Mountain resorts",
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      id: 7,
      name: "Yoga Retreat",
      description: "Relax and rejuvenate with guided yoga sessions.",
      locationType: "Indoor/Outdoor",
      weatherTags: ["sunny", "calm", "clear"],
      temperatureMin: 20,
      temperatureMax: 30,
      recommendation:
        "Choose a retreat that fits your schedule and skill level.",
      region: "Resorts or wellness centers",
      imageUrl: "https://images.unsplash.com/photo-1578894380662-48c6fd282c4f",
    },
    {
      id: 8,
      name: "City Walking Tour",
      description: "Explore landmarks and hidden gems on foot.",
      locationType: "Outdoor",
      weatherTags: ["sunny", "partly cloudy", "clear"],
      temperatureMin: 10,
      temperatureMax: 25,
      recommendation: "Wear comfortable walking shoes.",
      region: "Urban areas",
      imageUrl: "https://images.unsplash.com/photo-1484863137850-59afcfe05386",
    },
    {
      id: 9,
      name: "Indoor Rock Climbing",
      description:
        "Challenge yourself with climbing walls of varying difficulty.",
      locationType: "Indoor",
      weatherTags: ["rainy", "stormy", "cold"],
      temperatureMin: null,
      temperatureMax: null,
      recommendation: "Check safety guidelines and wear appropriate gear.",
      region: "Urban areas",
      imageUrl: "https://images.unsplash.com/photo-1579928735247-9f8c9c35c6f9",
    },
    {
      id: 10,
      name: "Kayaking",
      description: "Paddle along rivers, lakes, or coastal waters.",
      locationType: "Outdoor",
      weatherTags: ["sunny", "warm", "breezy", "clear"],
      temperatureMin: 20,
      temperatureMax: 35,
      recommendation: "Wear a life jacket and check water conditions.",
      region: "Waterfront locations",
      imageUrl: "https://images.unsplash.com/photo-1516569429446-48f13bd2ae73",
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
              <Map lat={lat} lon={lon} weatherData={weatherData} />
            </div>
          </div>

          {/* Weather Section */}
          <div style={styles.weatherSection}>
            <h2 style={styles.sectionTitle}>Weather</h2>
            <div style={styles.weatherPlaceholder}>
              <WeatherCard
                setLat={setLat}
                setLon={setLon}
                setForecastData={setForecastData}
                forecastData={forecastData}
                setWeatherData={setWeatherData}
                weatherData={weatherData}
              />
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div style={styles.activitiesSection}>
          <h2 style={styles.sectionTitle}>Activities</h2>
          <div style={styles.activitiesGrid}>
            {weatherData
              ? activities
                  .filter((activity) =>
                    activity.weatherTags.includes(
                      weatherData.condition.toLowerCase()
                    )
                  )
                  .map((activity, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.activityCard,
                        backgroundImage: `url(${activity.imageUrl})`,
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {activity.name}
                      </h3>
                      <p style={{ color: "white" }}>
                        Location: {activity.locationType}
                      </p>
                    </div>
                  ))
              : "Search a location to view activities..."}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
