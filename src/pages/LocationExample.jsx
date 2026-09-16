import React from "react";
import { useLocation } from "react-router-dom";

function LocationExample() {
    const location = useLocation();
    console.log(location);

  return (
    <div>
      <h1>Location Example</h1>
      <p>Current URL: {location.pathname}</p>
    </div>
  );
}

export default LocationExample;