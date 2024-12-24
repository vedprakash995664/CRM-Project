import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './AdminDashboardCss.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Here you can manage your users, view reports, and configure settings.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
