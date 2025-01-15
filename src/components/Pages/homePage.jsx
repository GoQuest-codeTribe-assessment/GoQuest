import React, { useEffect, useState } from "react";
import WeatherCard from "../weather/weatherCard";
import styles from "./homePageStyles";
import { getFormattedWeatherData } from "../utils/weatherApi";
import Map from "../map/Map";
import hiking from "../../assets/hiking.jpg";
import museum from "../../assets/museum.jpg";
import cycling from "../../assets/cycling.jpg";
import beach from "../../assets/beach.jpg";
import cooking from "../../assets/cooking.jpg";
import yoga from "../../assets/yoga.jpg";
import snow from "../../assets/snow.jpg";
import walking from "../../assets/walking.jpg";
import rock from "../../assets/rock.jpg";
import kayaking from "../../assets/kayaking.jpg";
import PopUp from "../popup/PopUp";

const HomePage = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [popedUpActivity, setpopedUpActivity] = useState(null);
  const [popup, setpopup] = useState(false);

  const activities = [
    {
      id: 1,
      name: "Hiking in the Mountains",
      description: "Explore scenic trails and enjoy breathtaking views.",
      locationType: "Outdoor",
      weatherTags: ["sunny", "clouds", "clear"],
      temperatureMin: 15,
      temperatureMax: 30,
      recommendation: "Bring plenty of water and sunscreen.",
      region: "Any mountainous area",
      imageUrl: hiking,
    },
    {
      id: 2,
      name: "Museum Visit",
      description: "Discover art, history, and culture indoors.",
      locationType: "Indoor",
      weatherTags: ["rain", "stormy", "clear"],
      temperatureMin: null,
      temperatureMax: null,
      recommendation: "Check opening hours before visiting.",
      region: "Urban areas",
      imageUrl: museum,
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
      imageUrl: beach,
    },
    {
      id: 4,
      name: "Cycling",
      description: "Ride through parks, trails, or city streets.",
      locationType: "Outdoor",
      weatherTags: ["sunny", "clouds", "breezy", "clear"],
      temperatureMin: 10,
      temperatureMax: 25,
      recommendation: "Wear a helmet and check your bike beforehand.",
      region: "Suburban or urban areas",
      imageUrl: cycling,
    },
    {
      id: 5,
      name: "Cooking Class",
      description: "Learn to cook local or international cuisines.",
      locationType: "Indoor",
      weatherTags: ["rain", "cold", "snow"],
      temperatureMin: null,
      temperatureMax: null,
      recommendation: "Book a class in advance.",
      region: "Urban areas or resorts",
      imageUrl: cooking,
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
      imageUrl: snow,
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
      imageUrl: yoga,
    },
    {
      id: 8,
      name: "City Walking Tour",
      description: "Explore landmarks and hidden gems on foot.",
      locationType: "Outdoor",
      weatherTags: ["sunny", "clouds", "clear"],
      temperatureMin: 10,
      temperatureMax: 25,
      recommendation: "Wear comfortable walking shoes.",
      region: "Urban areas",
      imageUrl: walking,
    },
    {
      id: 9,
      name: "Indoor Rock Climbing",
      description:
        "Challenge yourself with climbing walls of varying difficulty.",
      locationType: "Indoor",
      weatherTags: ["rain", "stormy", "cold", "clear"],
      temperatureMin: null,
      temperatureMax: null,
      recommendation: "Check safety guidelines and wear appropriate gear.",
      region: "Urban areas",
      imageUrl: rock,
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
      imageUrl: kayaking,
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
              <Map lat={lat} lon={lon} />
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
                      onClick={() => (
                        setpopup(true), setpopedUpActivity(activity)
                      )}
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
        {popup && (
          <PopUp
            setPopUp={setpopup}
            weatherData={weatherData}
            popedUpActivity={popedUpActivity}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
