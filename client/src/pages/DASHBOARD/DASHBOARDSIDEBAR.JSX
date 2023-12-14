import React from 'react';

const DashboardSidebar = () => {
  return (
    <ul id="sidebarnav" className="in">
      <li className="nav-small-cap">
        <span className="hide-menu"> Dashboard </span>
      </li>
      <li className="sidebar-item selected">
        <a className="sidebar-link sidebar-link active" href="riskdashboard" aria-expanded="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-home feather-icon"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="hide-menu">Risk Register</span>
        </a>
      </li>
      {/* Other list items */}
    </ul>
  );
}

export default DashboardSidebar;
