import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigateExample() {
    const navigate = useNavigate();

  return (
    <div>
    <h1>useNavigate Example</h1>  

    <button onClick={() => navigate("/about")}>
        Go to About
    </button>
    </div>
  );
}

export default NavigateExample;
