import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "../../App.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <br />
            <div className="lead text-muted">
              <h2>
                Welcome{" "}
                <Link
                  className="lead text-muted"
                  style={{ textDecoration: "none", fontSize: "40px" }}
                  to={`/profile/${profile.handle}`}
                >
                  {user.name}
                </Link>
                !
              </h2>
            </div>
            <br />
            <ProfileActions />
            <div className="card">
              {" "}
              <div class="card-body">
                <Experience experience={profile.experience} />
                <Education education={profile.education} />
                <div style={{ marginBottom: "60px" }} />
                <button
                  onClick={this.onDeleteClick.bind(this)}
                  className="btn btn-outline-danger"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <br />
            <div className="lead text-muted">
              <h2>Welcome {user.name}!</h2>
            </div>
            <br />

            <div class="alert alert-warning">
              You have not yet setup a profile, please add some info{" "}
            </div>
            <br />
            <Link to="/create-profile" className="btn btn-lg btn-info btn-sm">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div>
        <Navbar />
        <div>
          <div className="dashboard">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div class="card bg-info text-white">
                    <div class="card-body">
                      <h3>Dashboard</h3>
                    </div>
                  </div>
                  {dashboardContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
