import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';

export const DashboardActions = () => {
  return (
    <div className="dash-buttons">
    <Link to="/edit-profile" className="btn btn-light">
      <FontAwesomeIcon icon={ faUserCircle } /> Edit Profile
    </Link>
    <Link to="/add-experience" className="btn btn-light">
      <FontAwesomeIcon icon={ faGraduationCap } /> Add Experience
    </Link>
    <Link to="/add-education" className="btn btn-light">
      <FontAwesomeIcon icon={ faBlackTie } /> Add Education
    </Link>
  </div>
  );
}

export default DashboardActions;