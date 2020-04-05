import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import { Link } from "react-router-dom";
import Google from "../../components/Google";
import Facebook from "../../components/Facebook";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div class="login-body">
        <div className="container" id="login-container">
          <div className="row">
            <form
              noValidate
              className="form-signin mg-btm"
              onSubmit={this.onSubmit}
            >
              <h3 className="heading-desc">
                <Link to="/">
                  <img src="/images/ffflogo.png" alt="" />
                </Link>
              </h3>
              <div className="social-box">
                <p className="greeting">Welcome</p>
                <div className="row mg-btm">
                  <div className="col-md-12">
                    <Facebook />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                     
                    <Google />
                  </div>
                </div>
                <br />
                <table>
                  <tr>
                    <td style={{ width: "47%" }}>
                      <hr />
                    </td>
                    <td
                      style={{
                        verticalAlign: "middle",
                        textAlign: "center",
                        fontWeight: "bold"
                      }}
                    >
                      OR
                    </td>
                    <td style={{ width: "47%" }}>
                      <hr />
                    </td>
                  </tr>
                </table>
              </div>

              <div className="main">
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
                <br />
                <hr className="uk-divider-small" />
              </div>
              <div className="login-footer">
                <p className="text-center text-muted">
                  Don't have an account?<Link to="/register">Signup</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      // <div className="login">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-8 m-auto">
      //         <h1 className="display-4 text-center">Log In</h1>
      //         <p className="lead text-center">
      //           Sign in to your DevConnector account
      //         </p>
      //         <form onSubmit={this.onSubmit}>
      //           <TextFieldGroup
      //             placeholder="Email Address"
      //             name="email"
      //             type="email"
      //             value={this.state.email}
      //             onChange={this.onChange}
      //             error={errors.email}
      //           />

      //           <TextFieldGroup
      //             placeholder="Password"
      //             name="password"
      //             type="password"
      //             value={this.state.password}
      //             onChange={this.onChange}
      //             error={errors.password}
      //           />
      //           <input type="submit" className="btn btn-info btn-block mt-4" />
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
