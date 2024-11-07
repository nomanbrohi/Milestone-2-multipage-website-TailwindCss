'use client'
import { useState } from 'react';

const StarRating = () => {
  // Step 1: Set up state for the selected rating
  const [rating, setRating] = useState(0);

  // Step 2: Set up state for hovering effect (optional)
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {/* Step 3: Loop to render the stars */}
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1; // Rating is 1-based

        return (
          <label key={index}>
            {/* Step 4: Use radio button to capture input (can also use div/button) */}
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
              onClick={() => setRating(ratingValue)} // Step 5: Update rating on click
            />
            {/* Step 6: Display stars, highlight if selected or hovered */}
            <i
              className={`cursor-pointer bx ${ratingValue <= (hover || rating) ? 'bxs-star' : 'bx-star'}`}
              style={{ color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9', fontSize: '16px' }}
              onMouseEnter={() => setHover(ratingValue)} // Step 7: Handle hover effect
              onMouseLeave={() => setHover(0)} // Reset hover when leaving the star
            ></i>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
