import React, { useState } from "react";
import "./popUp.css";
import { ImCross } from "react-icons/im";
import styles from "../weather/weatherCardStyles";
import styles2 from "../Pages/homePageStyles";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseApi";
import { getAuth } from "firebase/auth";
import { FaHeart } from "react-icons/fa";

import { Search, Droplets, Wind, Thermometer, Sun, Cloud } from "lucide-react";

function PopUp({ setPopUp, weatherData, popedUpActivity }) {
  const [loading, setLoading] = useState(false);


  const auth = getAuth();
  const user = auth.currentUser;

  const addToFav = async () => {
    setLoading(true);

    if (user && popedUpActivity) {
      const favourite = {
        userId: user.uid,
        activityId: popedUpActivity.id,
        timestamp: new Date(),
        ...popedUpActivity,
        ...weatherData,
      };

      try {
        await setDoc(
          doc(db, "favorites", `${user.uid}_${popedUpActivity.id}`),
          favourite
        );
        alert("You have successfully added this activity to your favorites!");
        setLoading(false);
        setPopUp(false);
      } catch (error) {
        alert("Error adding to favorites:", error);
        setLoading(false);
        setPopUp(false);
      }
    } else {
      alert("User not authenticated, room ID, or room details missing");
      setLoading(false);
      setPopUp(false);
    }
  };

  return (
    <div className="overlay">
      <div className="modal" onClick={() => setPopUp(false)}></div>
      <div className="modalContent">
        <div className="popUpCont">
          {weatherData && (
            <div style={styles2.mapSection}>
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
                  <span style={styles.tileValue}>
                    {weatherData.temperature}
                  </span>
                  <span style={styles.tileLabel}>Temperature</span>
                </div>
              </div>
            </div>
          )}
          <div style={styles2.weatherSection}>
            <div>
              <div
                style={{
                  ...styles2.activityCard,
                  backgroundImage: `url(${popedUpActivity.imageUrl})`,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {popedUpActivity.name}
                </h3>
                <p style={{ color: "white" }}>
                  Location: {popedUpActivity.locationType}
                </p>
              </div>
              <br />
              <p>
                <strong>About activity</strong>
              </p>
              {popedUpActivity.description}
              <br />
              <br />
              <p>
                <strong>Activity recommendations</strong>
              </p>
              {popedUpActivity.recommendation}
              <br />
              <br />
              <p>
                <strong>Regions for this activity</strong>
              </p>
              {popedUpActivity.region}
              <br />
              <br />
              <p>
                <strong>Preferred temps for this activity</strong>
              </p>
              {popedUpActivity.temperatureMin}°C -
              {popedUpActivity.temperatureMax}°C
            </div>
          </div>
        </div>

        <ImCross className="closeModal" onClick={() => setPopUp(false)} />
        <FaHeart onClick={addToFav} className="fav">like activity</FaHeart>
      </div>
      {loading && (
        <div className="loader-cont">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
