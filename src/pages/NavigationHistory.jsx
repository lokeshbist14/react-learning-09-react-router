import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationHistory() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Navigation History</h1>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>

      <button onClick={() => navigate(1)}>
        Go Forward
      </button>
    </div>
  );
}

export default NavigationHistory;