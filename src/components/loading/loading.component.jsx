import React from 'react';
import './loading.styles.css';

// Message displayed between requests

const LoadingMessage = props => {
  const { loading } = props;
  const loadingClasses = loading ? 'loading-message loading-true' : 'loading-message';

  return <div className={loadingClasses}>Loading</div>;
};

export default LoadingMessage;