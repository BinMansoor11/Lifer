import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";
import Navbar from "../layout/Navbar";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="post-form mb-3">
          <div className="">
            <div class="card bg-info text-white">
              <div class="card-body">
                <h3>Projects</h3>
              </div>
            </div>
          </div>
          <div>
            <br />
            <button
              type="button"
              className="btn btn-info btn-block btn-lg"
              data-toggle="modal"
              data-target="#myModal"
            >
              Post A project
            </button>
            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h2 className="modal-title">Tell us what you need done?</h2>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <h4>Choose a name for your project</h4>
                    <p class="text-muted">
                      *Start with a bit about yourself or your business, and
                      include an overview of what you need done.
                    </p>
                    <p className="modal-body">*Payment and etc.</p>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <TextAreaFieldGroup
                          placeholder="Create a post"
                          name="text"
                          value={this.state.text}
                          onChange={this.onChange}
                          error={errors.text}
                        />
                      </div>
                      <button type="submit" className="btn btn-dark">
                        Submit
                      </button>
                    </form>
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
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
