import React from 'react';

function UserProfile({ userAppointments }) {
  return (
    <div>
      <h1>User Profile</h1>
      <h2>Appointments:</h2>
      <ul>
        {userAppointments.map((appointment, index) => (
          <li key={index}>
            {/* Display appointment details */}
            <div>Date: {appointment.date}</div>
            <div>Doctor: {appointment.doctor}</div>
            <div>Treatment: {appointment.treatment}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
