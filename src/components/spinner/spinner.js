import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center mt-3 mb-3">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner;