import React from 'react';
import { useState,useEffect } from 'react';
import { User, Heart, Mail, X } from 'lucide-react';
import { auth } from '../../Firebase/firebaseApi';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ProfilePopup = ({setProfile}) => {
 const [userDetails, setUserDetails] = useState(null);
 const [favorite,setFavorites] = useState()


 useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserDetails({
        email: user.email || "Anonymous User",
        displayName: user.displayName || "Anonymous User",
      });
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        // Set user details
        setUserDetails({
          email: user.email || "Anonymous User",
          displayName: user.displayName || "Anonymous User",
        });

        // Fetch favorites from Firestore
        try {
          const docRef = doc(db, "favorites", user.uid); // Assuming "favorites" is your collection
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setFavorites(docSnap.data().items || []); // Assuming favorites are stored in an 'items' field
          } else {
            console.log("No favorites found for this user.");
          }
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  console.log(favorite)


  const favorites = [
    "Photography",
    "Mountain Hiking", 
    "Japanese Cuisine"
  ];

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
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
          z-index: 999999;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .profile-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 700px;
          overflow: hidden;
          animation: slideUp 0.4s ease-out;
          position: relative;
        }

        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: white;
          z-index: 1;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        .profile-header {
          padding: 30px;
          text-align: center;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
        }

        .profile-image-container {
          width: 120px;
          height: 120px;
          margin: 0 auto 20px;
          border-radius: 50%;
          padding: 5px;
          background: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid white;
        }

        .profile-content {
          padding: 30px;
        }

        .input-group {
          margin-bottom: 25px;
        }

        .input-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          color: #4b5563;
          font-weight: 500;
        }

        .email-input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .email-input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .favorites-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .favorite-tag {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(99, 102, 241, 0.2);
        }

        .favorite-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(99, 102, 241, 0.3);
        }
      `}</style>

      <div className="profile-card">
        <button 
          className="close-button"
          onClick={() => setProfile(false)}
          aria-label="Close profile"
        >
          <X size={20} />
        </button>

        <div className="profile-header">
          <div className="profile-image-container">
            <img 
              src="/api/placeholder/120/120" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
        </div>

        <div className="profile-content">
          <div className="input-group">
            <label className="input-label">
              <Mail size={18} />
              <span>Email</span>
            </label>
            {userDetails ? (
                <input 
                    type="email" 
                    className="email-input"
                    placeholder="user@example.com"
                    value={userDetails.email || ""}
                    readOnly
                />
                ) : (
                <p>Loading user details...</p>
                )}
          </div>

          <div className="input-group">
            <label className="input-label">
              <Heart size={18} />
              <span>Favorites</span>
            </label>
            <div className="favorites-container">
              {favorites.map((favorite, index) => (
                <span key={index} className="favorite-tag">
                  {favorite}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;