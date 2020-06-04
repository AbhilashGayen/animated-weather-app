import React, { useState } from "react";
import "./city-input.styles.css";
// Form to enter the location for the weather request

const CityInput = (props) => {
  // Use state hook
  const [location, setLocation] = useState("");

  const onHandleChange = (event) => {
    setLocation(event.target.value);
  };

  const onHandleSubmit = (event) => {
    // Retrun if no location value
    if (!location) {
      return;
    }
    event.preventDefault();
    props.handleLocationChange(location);
    // Reset input after submit
    event.target.reset();
  };

  return (
    <form className="city-form" onSubmit={onHandleSubmit}>
      <input
        className="search"
        type="text"
        id="search"
        placeholder="Enter City Name"
        name="location"
        autoComplete="off"
        onChange={onHandleChange}
        required
      />
      <input className="submit" type="submit" value="" />
    </form>
  );
};

export default CityInput;
