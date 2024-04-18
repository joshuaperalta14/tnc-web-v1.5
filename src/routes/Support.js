import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-background">
      <div className="support-container">
        <h1>Welcome to TNC Group Support</h1>
        <a href="/support-option-1" className="card1">
          <img src="path_to_your_image.jpg" alt="Support Option 1" className="card-img" />
          <div className="card-label">Option 1</div>
        </a>
        <a href="/support-option-2" className="card2">
          <img src="path_to_your_image.jpg" alt="Support Option 2" className="card-img" />
          <div className="card-label">Option 2</div>
        </a>
        <a href="/support-option-3" className="card3">
          <img src="path_to_your_image.jpg" alt="Support Option 3" className="card-img" />
          <div className="card-label">Option 3</div>
        </a>
        <a href="/support-option-4" className="card4">
          <img src="path_to_your_image.jpg" alt="Support Option 4" className="card-img" />
          <div className="card-label">Option 4</div>
        </a>
      </div>
    </div>
  );
}

export default Support;
