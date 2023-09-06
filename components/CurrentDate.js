import React, { useEffect, useState } from 'react';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    setCurrentDate(currentDate.toDateString()); // Convert to a string format
  }, []);

  return (
    <div>
      <p>Current Date: {currentDate}</p>
    </div>
  );
};

export default CurrentDate;