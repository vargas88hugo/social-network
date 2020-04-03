import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          Developers
        </Link>
      </li>
      <li>
        <Link to='/posts'>
          Posts
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
           <FontAwesomeIcon icon={ faUser } style={{ marginRight: "5px" }} />
           Dashboard
        </Link>
      </li>
      <li>
        <Link to="/dashboard" onClick={logout}>
          <FontAwesomeIcon icon={ faSignOutAlt } style={{ marginRight: "5px"}}/>
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li><Link to='/profiles'>Developers</Link>
      </li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><FontAwesomeIcon icon={ faNetworkWired } /> Social Network</Link>
      </h1>
      { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </nav>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});
 
export default connect(mapStateToProps, { logout })(Navbar);