import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../layout/Navbar";
toast.configure();

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      price: 0
    };
    this.handleToken = this.handleToken.bind(this);
  }

  onChange = e => {
    // console.log(e.target.value);
    this.setState({
      price: e.target.value
    });
    // console.log(this.product);
  };

  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }
  async handleToken(token, addresses) {
    const product = {
      name: "Pro account",
      price: this.state.price,
      description: "Dev Pro account"
    };

    const response = await axios.post("/checkout", { token, product });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success!", { type: "success" });
    } else {
      alert("Something went wrong", { type: "error" });
    }
  }
  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div class="profile">
          <div class="container">
            <div className="col-md-12">
              <div class="card bg-info text-white">
                <div class="card-body">
                  <h3>Profile</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
              {/* </div> */}
            </div>
            <button
              type="button"
              className="btn btn-light mb-3 float-left"
              data-toggle="modal"
              data-target="#myModal"
            >
              Pay Freelancer
            </button>
            {/* 
  <!-- The Modal --> */}
            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Pay With Stripe</h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    {" "}
                    <input type="text" onChange={this.onChange} />
                    <StripeCheckout
                      stripeKey="pk_test_ffPxCKwis4tYogIxRQ2OowxZ00MTHdt0lD"
                      token={this.handleToken}
                      amount={this.state.price * 100}
                      name="Pro account"
                    />
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <div
                  className="col-lg-8"
                  style={{ float: "right", marginTop: "50px" }}
                >
                  <div className="card bg-info text-white">
                    <div className="card-body"></div>
                  </div>
                </div>
                <div className="col-lg-8" style={{ float: "right" }}>
                  <div className="card">
                    <div className="card-body">
                      <ProfileCreds
                        education={profile.education}
                        experience={profile.experience}
                      />
                    </div>
                    <hr />
                  </div>
                </div>

                <div className="">
                  <div className="card" style={{ width: "300px" }}>
                    <ProfileHeader profile={profile} />
                  </div>
                  <div className="card" style={{ width: "300px" }}>
                    <ProfileAbout profile={profile} />
                  </div>
                </div>
              </div>

              {profile.githubusername ? (
                <ProfileGithub username={profile.githubusername} />
              ) : null}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Navbar />

        <div className="profile">
          <div className="container">
            <div className="row">
              <div className="col-md-12">{profileContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
