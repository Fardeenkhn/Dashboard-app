// Dashboard.js
import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import './Dashboard.css'; // CSS for styling the dashboard and sidebar

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Sample data and configuration for the charts
  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Guest',
        data: [200, 300, 150, 400],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'User',
        data: [100, 200, 300, 200],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Revenue',
        data: [500, 800, 300, 600],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
      {
        label: 'Top Products',
        data: [55, 31, 14],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Dashboard Data',
      },
    },
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Menu */}
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Schedule</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="dashboard-metrics">
          <div className="metric">
            <h2>Total Revenue</h2>
            <p>$2,129,430</p>
          </div>
          <div className="metric">
            <h2>Total Transactions</h2>
            <p>1,520</p>
          </div>
          <div className="metric">
            <h2>Total Likes</h2>
            <p>9,721</p>
          </div>
          <div className="metric">
            <h2>Total Users</h2>
            <p>9,721</p>
          </div>
        </div>

        <div className="charts">
          <div className="chart-container">
            <h3>Activities</h3>
            <Line data={lineData} options={options} />
          </div>
          <div className="chart-container">
            <h3>Top Products</h3>
            <Pie data={pieData} options={options} />
          </div>
          <div className="chart-container">
            <h3>Revenue Over Time</h3>
            <Bar data={barData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
