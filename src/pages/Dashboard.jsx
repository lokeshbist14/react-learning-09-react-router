import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the Dashboard page.</p>

      <div>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Dashboard;