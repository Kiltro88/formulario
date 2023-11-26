// SocialButton.jsx
import React from 'react';

function SocialButton({ canalSocial }) {
  return (
    <button className="btn btn-light rounded-circle p-2 m-2">
      <img src={`src/assets/${canalSocial}.png`} alt={canalSocial} className="icon" width="40" height="40" />
    </button>
  );
}

export default SocialButton;
