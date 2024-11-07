import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faInfoCircle, faDashboard, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">EcoBins</Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/profile" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <FontAwesomeIcon icon={faDashboard} className="mr-2" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/signin" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link to="/signup" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;