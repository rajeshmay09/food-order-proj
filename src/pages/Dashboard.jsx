import React from "react";

import { Link, Route, Routes } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import SideBar from "../components/Profile/SideBar";

const Dashboard = ({activeItem}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="mb-4">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <p>Current path: {currentPath}</p>
            <Routes>
              <Route path={`${currentPath}/profile`} component={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
