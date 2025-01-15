import React from 'react';
import { User, Heart, Mail } from 'lucide-react';

const ProfilePopup = () => {
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
          max-width: 400px;
          overflow: hidden;
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
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
            <input 
              type="email" 
              className="email-input"
              placeholder="user@example.com"
            />
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