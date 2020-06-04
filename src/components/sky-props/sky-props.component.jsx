import React from "react";
import Cloud from "../../assets/images/cloud-1.png";
import Sun from "../../assets/images/sun.png";
import Rain from "../../assets/images/rain.png";
import skyPropsHandler from "../../utils/sky-props.handler";

// Animated sky objects that change and move around depending on weather data

import "./sky-props.styles.css";

const SkyProps = (props) => {
  const { weatherData, statusCode } = props;
  // If the request was successful
  if (statusCode === 200) {
    // Get CSS classes for all props depending on weather
    const {
      cloudsClasses,
      sunClasses,
      displayFilterClasses,
      rainClasses,
    } = skyPropsHandler(weatherData);
    // Set rain background image
    const rainStyle = { backgroundImage: `url(${Rain})` };

    return (
      <React.Fragment>
            <img className={sunClasses} src={Sun} alt="Sun drawing" />
            <div className={rainClasses} style={rainStyle} />
            <img className={cloudsClasses[0]} src={Cloud} alt="Small cloud" />
            <img className={cloudsClasses[1]} src={Cloud} alt="Small cloud" />
            <img className={cloudsClasses[2]} src={Cloud} alt="Small cloud" />
            <img className={cloudsClasses[3]} src={Cloud} alt="Small cloud" />
            <img className={cloudsClasses[4]} src={Cloud} alt="Small cloud" />
            <div className={displayFilterClasses} />
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default SkyProps;
