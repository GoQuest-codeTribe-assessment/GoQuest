import React, { useState, useEffect } from 'react';
import { User, Heart, Mail, X, MapPin, Tag, LogOut } from 'lucide-react';
import { auth } from '../../Firebase/firebaseApi';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import user from '../../assets/anonymous.png'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

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

  return (
    <div className="popup-overlay">
     <style>{`
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(144, 202, 249, 0.2);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    z-index: 1000;
    animation: fadeIn 0.3s ease-out;
  }

  .profile-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 24px;
    width: 100%;
    max-width: 700px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(144, 202, 249, 0.3);
    animation: slideUp 0.4s ease-out;
    border: 2px solid rgba(255, 255, 255, 0.8);
  }

  .profile-header {
    position: relative;
    padding: 2.5rem;
    background: linear-gradient(135deg, #E3F2FD, #BBDEFB, #90CAF9);
    color: #1976D2;
    text-align: center;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid rgba(25, 118, 210, 0.2);
    background: rgba(255, 255, 255, 0.9);
    color: #1976D2;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .close-button:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(144, 202, 249, 0.3);
  }

  .profile-image-container {
    width: 108px;
    height: 108px;
    margin: 0 auto 1.25rem;
    padding: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    box-shadow: 0 8px 24px rgba(144, 202, 249, 0.2);
  }

  .profile-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #90CAF9;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .profile-image:hover {
    transform: scale(1.1);
  }

  .profile-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: #1976D2;
  }

  .profile-content {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.9);
  }

  .input-group {
    margin-bottom: 1.75rem;
  }

  .input-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.925rem;
    font-weight: 500;
    color: #1976D2;
    margin-bottom: 0.75rem;
  }

  .email-input {
    width: 100%;
    padding: 0.875rem 1.25rem;
    background: rgba(227, 242, 253, 0.5);
    border: 2px solid #BBDEFB;
    border-radius: 12px;
    font-size: 0.925rem;
    color: #1976D2;
    transition: all 0.3s ease;
  }

  .email-input:focus {
    border-color: #90CAF9;
    background: rgba(227, 242, 253, 0.8);
    box-shadow: 0 4px 12px rgba(144, 202, 249, 0.2);
    outline: none;
  }

  .favorites-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.25rem;
  }

  .favorite-card {
    position: relative;
    background: linear-gradient(135deg, rgba(227, 242, 253, 0.8), rgba(187, 222, 251, 0.8));
    border-radius: 16px;
    padding: 1.25rem;
    transition: all 0.3s ease;
    border: 2px solid rgba(255, 255, 255, 0.8);
  }

  .favorite-card:hover {
    box-shadow: 0 8px 24px rgba(144, 202, 249, 0.25);
    transform: translateY(-3px);
    border-color: #90CAF9;
  }

  .favorite-content {
    display: flex;
    gap: 1.25rem;
  }

  .favorite-image {
    width: 72px;
    height: 72px;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid #BBDEFB;
  }

  .favorite-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .favorite-image:hover img {
    transform: scale(1.1);
  }

  .favorite-details {
    flex: 1;
  }

  .favorite-name {
    font-weight: 600;
    color: #1976D2;
    margin: 0 0 0.75rem 0;
    font-size: 1.1rem;
  }

  .favorite-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.925rem;
    color: #64B5F6;
    margin-bottom: 0.5rem;
  }

  .favorite-condition {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    padding: 0.375rem 1rem;
    border-radius: 9999px;
    font-size: 0.825rem;
    color: #1976D2;
    border: 1px solid #BBDEFB;
    transition: all 0.3s ease;
  }

  .favorite-condition:hover {
    background: rgba(255, 255, 255, 1);
    border-color: #90CAF9;
  }

  .no-favorites {
    grid-column: 1 / -1;
    text-align: center;
    padding: 2.5rem;
    background: rgba(227, 242, 253, 0.5);
    border-radius: 16px;
    color: #64B5F6;
    border: 2px solid #BBDEFB;
  }

  .logout-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    background: linear-gradient(135deg, #90CAF9, #64B5F6);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 0.925rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .logout-button:hover {
    background: linear-gradient(135deg, #64B5F6, #42A5F5);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(144, 202, 249, 0.3);
  }

  .logout-button:active {
    transform: translateY(0);
  }

  @keyframes fadeIn {
    from { 
      opacity: 0; 
      backdrop-filter: blur(0);
    }
    to { 
      opacity: 1; 
      backdrop-filter: blur(8px);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
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
          <button
            className="logout-button"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;