import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {id} = useParams();

  return (
    <div>
      <h1>User Page</h1>
      <p>This is the User page.</p>
      <p>User ID: {id}</p>
    </div>
  );
}

export default User;