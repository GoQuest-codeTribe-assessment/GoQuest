const API_KEY = "d7c757ee7b3a22b8f08a5822bcc1a414";

const getFormattedWeatherData = async (city, units = 'metric') => {
    const geocodeURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    try {
        const response = await fetch(geocodeURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Raw data:', data);

        const { lat, lon } = data.coord; // Get latitude and longitude for the city

        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`;
        const forecastResponse = await fetch(forecastURL);
        if (!forecastResponse.ok) {
            throw new Error('Forecast data fetch failed');
        }

        const forecastData = await forecastResponse.json();
        console.log('Forecast data:', forecastData);

        // Extract 5-day forecast
        const fiveDayForecast = forecastData.list.filter((_, index) => index % 8 === 0) // Every 8th entry corresponds to the forecast at the same time of day
            .map(item => {
                const {
                    dt,
                    main: { temp, temp_min, temp_max, humidity },
                    weather,
                    wind: { speed },
                } = item;
                const { description, icon } = weather[0];
                return {
                    date: new Date(dt * 1000).toLocaleDateString(),
                    description,
                    icon,
                    temp,
                    temp_min,
                    temp_max,
                    humidity,
                    wind_speed: speed,
                };
            });

        return fiveDayForecast;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

export { getFormattedWeatherData };
