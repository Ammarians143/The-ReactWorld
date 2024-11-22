import React from 'react';
import './shimmerEffect.css'

export default function ShimmerEffect() {
  return (
  
  <div className="countries-container">
    {
    Array.from({length: 12}).map((country , i) => {
        return <div key={i} className="country-card shimmer-effect"></div>
    })
    }
  </div>
  );
}
