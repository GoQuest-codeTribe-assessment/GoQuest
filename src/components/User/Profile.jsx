import React, { useState, useEffect } from 'react';
import { User, Heart, Mail, X, MapPin, Tag } from 'lucide-react';
import { auth } from '../../Firebase/firebaseApi';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import user from '../../assets/anonymous.png'



const ProfilePopup = ({ setProfile }) => {
    // States
  const [userDetails, setUserDetails] = useState(null);
  const [favorites, setFavorites] = useState([]);

//   Fetch 
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserDetails({
        email: user.email || "Anonymous User",
        displayName: user.displayName || "Anonymous User",
        user: user.uid
      });
      const fetchUserFavorites = async (userId) => {
        try {
          const favoritesQuery = query(
            collection(getFirestore(), "favorites"),
            where("userId", "==", userId)
          );
          const querySnapshot = await getDocs(favoritesQuery);
          const favoritesList = [];
          querySnapshot.forEach((doc) => {
            favoritesList.push({ id: doc.id, ...doc.data() });
          });
          setFavorites(favoritesList);
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      };
      fetchUserFavorites(user.uid);
    }
  }, []);

  console.log(favorites)

  return (
    <div className="popup-overlay">
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }
        .profile-card {
          background: white;
          border-radius: 16px;
          width: 100%;
          max-width: 700px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.4s ease-out;
        }
        .profile-header {
          position: relative;
          padding: 2rem;
          background: linear-gradient(135deg, #4F46E5, #7C3AED, #EC4899);
          color: white;
          text-align: center;
        }
        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }
        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .profile-image-container {
          width: 96px;
          height: 96px;
          margin: 0 auto 1rem;
          padding: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
        }
        .profile-image-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid white;
        }
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .profile-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }
        .profile-content {
          padding: 1.5rem;
        }
        .input-group {
          margin-bottom: 1.5rem;
        }
        .input-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4B5563;
          margin-bottom: 0.5rem;
        }
        .email-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          font-size: 0.875rem;
          color: #374151;
        }
        .favorites-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
        }
        .favorite-card {
          position: relative;
          background: linear-gradient(to bottom right, #F9FAFB, #F3F4F6);
          border-radius: 12px;
          padding: 1rem;
          transition: all 0.2s;
        }
        .favorite-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        .favorite-content {
          display: flex;
          gap: 1rem;
        }
        .favorite-image {
          width: 64px;
          height: 64px;
          border-radius: 8px;
          overflow: hidden;
        }
        .favorite-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .favorite-details {
          flex: 1;
        }
        .favorite-name {
          font-weight: 500;
          color: #111827;
          margin: 0 0 0.5rem 0;
        }
        .favorite-info {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #6B7280;
          margin-bottom: 0.25rem;
        }
        .favorite-condition {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          color: #4B5563;
        }
        .no-favorites {
          grid-column: 1 / -1;
          text-align: center;
          padding: 2rem;
          background: #F9FAFB;
          border-radius: 12px;
          color: #6B7280;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="profile-card">
        <div className="profile-header">
          <button className="close-button" onClick={() => setProfile(false)}>
            <X size={20} />
          </button>
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img
                src={user}
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
        <div className="profile-content">
          <div className="input-group">
            <label className="input-label">
              <Mail size={16} />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              className="email-input"
              value={userDetails?.email || ""}
              readOnly
            />
          </div>
          <div className="input-group">
            <label className="input-label">
              <Heart size={16} />
              <span>Favorite Places</span>
            </label>
            <div className="favorites-grid">
              {favorites.length > 0 ? (
                favorites.map((favorite, index) => (
                  <div key={index} className="favorite-card">
                    <div className="favorite-content">
                      <div className="favorite-image">
                        <img
                          src={favorite.imageUrl || "/api/placeholder/64/64"}
                          alt={favorite.name}
                        />
                      </div>
                      <div className="favorite-details">
                        <h3 className="favorite-name">{favorite.name}</h3>
                        <div className="favorite-info">
                          <MapPin size={14} />
                          <span>{favorite.city}</span>
                        </div>
                        <div className="favorite-info">
                          <Tag size={14} />
                          <span>{favorite.locationType}</span>
                        </div>
                      </div>
                    </div>
                    <div className="favorite-condition">
                      {favorite.condition}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-favorites">
                  No favorite places saved yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePopup;