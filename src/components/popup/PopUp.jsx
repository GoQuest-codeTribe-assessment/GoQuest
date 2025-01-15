import React from "react";
import "./popUp.css";
import { ImCross } from "react-icons/im";
import styles from "../weather/weatherCardStyles";
import styles2 from "../Pages/homePageStyles";

import { Search, Droplets, Wind, Thermometer, Sun, Cloud } from "lucide-react";

function PopUp({ setPopUp, weatherData, popedUpActivity }) {

    
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
              {popedUpActivity.temperatureMin}°C -{" "}
              {popedUpActivity.temperatureMax}°C
            </div>
          </div>
        </div>

        <ImCross className="closeModal" onClick={() => setPopUp(false)} />
        {/* <button className="closeModal" onClick={()=>deactivateSignInModal()}>Close</button> */}
      </div>
    </div>
  );
}

export default PopUp;
