import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            <button type="button" className="btn btn-outline-info btn-sm">
              Freelancers
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            <button type="button" className="btn btn-outline-info btn-sm">
              Projects
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <button type="button" className="btn btn-outline-info btn-sm">
              Dashboard
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            <button type="button" className="btn btn-outline-info btn-sm">
              Logout
            </button>
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            <button type="button" className="btn btn-info">
              Sign Up
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <button type="button" className="btn btn-info">
              Login
            </button>
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar  fixed-top navbar-expand-md custom-navbar border-bottom border-info mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <a href="/index/index.html">
              <img
                className="navbar-brand"
                src="/images/ffflogo.png"
                id="logo_custom"
                alt="logo"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  <button type="button" className="btn btn-light">
                    Developers
                  </button>
                </Link>
              </li>
            </ul> */}
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
