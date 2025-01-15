# GoQuest

## Weather-Based Travel Planner with API Integration

### Overview
This project is a **Weather-Based Travel Planner** designed to help users plan trips based on real-time weather conditions at their chosen destinations. The app integrates a weather API to fetch real-time data and provides activity recommendations tailored to the current and forecasted weather.


### Figma Design

https://www.figma.com/design/sQQdeBk1K7dzXeysVXLiVy/Untitled?node-id=0-1&t=QUwu5bImcdWnZZa2-1

### Live Demo

link here

---

## Core Features
1. **Destination Search**  
   Users can search for destinations by city or location name.

2. **Weather Integration**  
   - Fetch real-time weather conditions and a 7-day forecast using a weather API.
   - Display temperature, humidity, wind speed, and weather conditions (e.g., sunny, rainy, cloudy).

3. **Activity Recommendations**  
   - Suggest activities based on weather conditions (e.g., hiking for sunny weather, indoor activities for rainy weather).  
   - Uses a predefined dataset of activities.

4. **Favorites List**  
   - Allow users to save destinations for quick reference later.

---

## Technology Stack
- **Frontend**:  
  - React.js.  

- **Backend**:  
  - Firebase Firestore/Realtime Database.  

---

## APIs Used
- **Open Weather API**: To fetch real-time weather data and forecasts.  
- **Leaf let Map API**: To display the location of the destination.

---

## Setup Instructions
1. Clone the repository:  
   ```bash
   git clone https://github.com/GoQuest-codeTribe-assessment/GoQuest.git
   cd [repository_name]

2. Install dependencies:  
   ```bash
   npm install
   
3. Install dependencies:  
   ```bash
    npm run dev

## Challenges and Solutions

### Challenges

API Integration: Ensuring smooth integration of multiple APIs while maintaining performance.

Data Presentation: Designing user-friendly displays for weather data and recommendations.

Real-Time Updates: Managing real-time API calls efficiently.

### Solutions

Read up on the documentation of the API.

Applied error handling for API failures or invalid inputs.      
