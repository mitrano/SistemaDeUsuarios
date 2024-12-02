import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButton = ({ label = 'Voltar para a Home', destination = '/' }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(destination)}
      className="home-button"
    >
      {label}
    </button>
  );
};

export default NavigationButton;
