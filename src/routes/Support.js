import React from 'react';
import './Support.css';
import { FaUser, FaLock } from "react-icons/fa"

const Support = () => {
  return (
    <div className="support-background">
      <div className="support-container">
        <h1>Welcome to TNC Group Support</h1>
        <a href="/accountsettings" className="card1">
          <FaUser className="card-icon" />
          <div className="card-label">Account Settings</div>
        </a>
        <a href="/passwordreset" className="card2">
          <FaLock className="card-icon" />
          <div className="card-label">Password Reset</div>
        </a>
        <a href="/support-option-3" className="card3">
          <FaLock className="card-icon" />
          <div className="card-label">Sample Option</div>
        </a>
        <a href="/support-option-4" className="card4">
          <FaLock className="card-icon" />
          <div className="card-label">Option 4</div>
        </a>
      </div>
    </div>
  );
}

export default Support;
