import React, { useState } from "react";
import ProfileManagement from "./ProfileManagement";

const AccountSec = () => {
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex flex-row pt-4 pb-4">
      <div className="max-w-xs flex flex-col max-h-64 p-4 border border-solid border-gray-900">
        <a
          href="#"
          onClick={() => handlePageChange("home")}
          className={`inline py-2 hover:bg-gray-300 ${
            activePage === "home" ? "bg-gray-300" : ""
          }`}
        >
          Home
        </a>

        <a
          href="#"
          onClick={() => handlePageChange("about")}
          className={`inline py-2 hover:bg-gray-300 ${
            activePage === "about" ? "bg-gray-300" : ""
          }`}
        >
          About
        </a>

        <a
          href="#"
          onClick={() => handlePageChange("contact")}
          className={`inline py-2 hover:bg-gray-300 ${
            activePage === "contact" ? "bg-gray-300" : ""
          }`}
        >
          Contact
        </a>
      </div>
      <div className="flex-1 p-4">
        {activePage === "home" && (
          <div>
            <ProfileManagement />
          </div>
        )}
        {activePage === "about" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">About Page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
        )}
        {activePage === "contact" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSec;
{
  /**<div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <div
          className={`w-64 bg-gray-200 p-4 transition-width duration-300 ${
            sidebarOpen ? "w-64" : "w-16"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Sidebar</h2>
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={handleSidebarToggle}
        >
          {sidebarOpen? 'Close' : 'Menu'}
        </button>
      </div>
          <ul
            className={`transition-opacity duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <li>
              <a
                href="#"
                onClick={() => handlePageChange("home")}
                className={`block py-2 hover:bg-gray-300 ${
                  activePage === "home" ? "bg-gray-300" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handlePageChange("about")}
                className={`block py-2 hover:bg-gray-300 ${
                  activePage === "about" ? "bg-gray-300" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handlePageChange("contact")}
                className={`block py-2 hover:bg-gray-300 ${
                  activePage === "contact" ? "bg-gray-300" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-4">
          {activePage === "home" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">Home Page</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </div>
          )}
          {activePage === "about" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">About Page</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </div>
          )}
          {activePage === "contact" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AccountSec;

{
  /** 
    <div className="flex h-screen">
      <div
        className={`w-64 bg-gray-200 p-4 transition-width duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={handleSidebarToggle}
        >
          {sidebarOpen ? <span>Close</span> : <span>Menu</span>}
        </button>
        <ul
          className={`transition-opacity duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <li>
            <a
              href="#"
              onClick={() => handlePageChange("home")}
              className={`block py-2 hover:bg-gray-300 ${
                activePage === "home" ? "bg-gray-300" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handlePageChange("about")}
              className={`block py-2 hover:bg-gray-300 ${
                activePage === "about" ? "bg-gray-300" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handlePageChange("contact")}
              className={`block py-2 hover:bg-gray-300 ${
                activePage === "contact" ? "bg-gray-300" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        {activePage === "home" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Home Page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis
              ex.sssssssssssssssssssssss
            </p>
          </div>
        )}
        {activePage === "about" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">About Page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
        )}
        {activePage === "contact" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis
              ex.dfsfgffffffffffffffffff
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSec;

{
  /**
    <div className="w-64 bg-gray-200 p-4">
          <ul>
            <li>
              <a
                href="#"
                onClick={() => handlePageChange('home')}
                className={`block py-2 hover:bg-gray-300 ${
                  activePage === 'home' ? 'bg-gray-300' : ''
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handlePageChange('about')}
                className={`block py-2 hover:bg-gray-300 ${
                  activePage === 'about' ? 'bg-gray-300' : ''
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handlePageChange('contact')}
                className={`block py-2 hover:bg-gray-300 ${
                  activePage === 'contact' ? 'bg-gray-300' : ''
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div> 
        
        
        
        
        {sidebarOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}*/
}
