import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Services extends Component {
  render() {
    return (
      <div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/car5.jpg"
                alt="Los Angeles"
                width="1100"
                height="900"
              />
              <div className="carousel-caption border-top border-dark border-bottom border-dark">
                <h1 className="display-3" style={{ fontWeight: "400" }}>
                  Freelancers for any job
                </h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/business-communication-computer-concept.jpg"
                alt="Chicago"
                width="1100"
                height="900"
              />
              <div className="carousel-caption border-top border-light border-bottom border-light">
                <h3
                  className="display-3"
                  style={{
                    fontWeight: "400",
                    backgroundColor: "#26becc"
                  }}
                >
                  Digital Marketing
                </h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/car6.jpg"
                alt="New York"
                width="1100"
                height="900"
              />
              <div className="carousel-caption border-top border-light border-bottom border-light">
                <h3 className="display-3" style={{ fontWeight: "400" }}>
                  Graphic Designing
                </h3>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
        <br />
        <div
          className="container"
          style={{ marginTop: "100px", marginBottom: "50px" }}
        >
          <h1
            className="display 1 text-center"
            style={{ marginBottom: "50px" }}
          >
            Need Work Done?
          </h1>
          <div className="row">
            <div className="col-sm-4">
              <img
                src="/images/jobboard.png"
                className="rounded-circle mx-auto d-block"
                alt="Cinque Terre"
                width="280"
                height="280"
                style={{ marginBottom: "30px" }}
              />
              <h3 className="text-center">Post A job</h3>
              <p
                className="text-center"
                style={{ fontSize: "20px", lineHeight: "40px" }}
              >
                It's easy. Simply post a job you need completed and receive
                competitive bids from freelancers within minutes.
              </p>
            </div>
            <div className="col-sm-4">
              <img
                src="/images/freelancer--working-from-home--concept--man.jpg"
                className="rounded-circle mx-auto d-block"
                alt="Cinque Terre"
                width="280"
                height="280"
                style={{ marginBottom: "30px" }}
              />
              <h3 className="text-center">Choose Freelancer</h3>
              <p
                className="text-center"
                style={{ fontSize: "20px", lineHeight: "40px" }}
              >
                Whatever your needs, there will be a freelancer to get it done:
                from web design, mobile app development, virtual assistants,
                product manufacturing, and graphic design (and a whole lot
                more).
              </p>
            </div>
            <div className="col-sm-4">
              <img
                src="/images/stripe-integration-898x505.jpg"
                className="rounded-circle mx-auto d-block"
                alt="Cinque Terre"
                width="280"
                height="280"
                style={{ marginBottom: "30px" }}
              />
              <h3 className="text-center">Pay Safely</h3>
              <p
                className="text-center"
                style={{ fontSize: "20px", lineHeight: "40px" }}
              >
                With secure payments and thousands of reviewed professionals to
                choose from, Freelancer.com is the simplest and safest way to
                get work done online.
              </p>
            </div>
          </div>
        </div>
        <section className="details-card">
          <h1
            className="display 1 text-center"
            style={{ marginBottom: "70px" }}
          >
            Here are some of our most popular services
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card-content">
                  <div className="card-img">
                    <img src="/images/respons-768x432.png" alt="" />
                  </div>
                  <div className="card-desc">
                    <h3 className="text-center">Website Development</h3>
                    <br />
                    <Link
                      to="/login"
                      className="btn-card btn-block text-center btn-info"
                      style={{ textDecoration: "none" }}
                    >
                      Post Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-content">
                  <div className="card-img">
                    <img src="/images/app-development-device-flat.jpg" alt="" />
                  </div>
                  <div className="card-desc">
                    <h3 className="text-center">App Development</h3>
                    <br />
                    <Link
                      to="/login"
                      className="btn-card btn-block text-center btn-info"
                      style={{ textDecoration: "none" }}
                    >
                      Post Project
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-content">
                  <div className="card-img">
                    <img
                      src="/images/business-communication-computer-concept.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-desc">
                    <h3 className="text-center">Marketing</h3>
                    <br />
                    <Link
                      to="/login"
                      className="btn-card btn-block text-center btn-info"
                      style={{ textDecoration: "none" }}
                    >
                      Post Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="r-2">
              <div className="col-md-4">
                <div className="card-content">
                  <div className="card-img">
                    <img src="/images/logodev.jpg" alt="" />
                  </div>
                  <div className="card-desc">
                    <h3 className="text-center">Logo Design</h3>
                    <br />
                    <Link
                      to="/login"
                      className="btn-card btn-block text-center btn-info"
                      style={{ textDecoration: "none" }}
                    >
                      Post Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-content">
                  <div className="card-img">
                    <img src="/images/contentwriting.jpg" alt="" />
                  </div>
                  <div className="card-desc">
                    <h3 className="text-center">Writing</h3>
                    <br />
                    <Link
                      to="/login"
                      className="btn-card btn-block text-center btn-info"
                      style={{ textDecoration: "none" }}
                    >
                      Post Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-content">
                  <div className="card-img">
                    <img src="/images/graphic.jpg" alt="" />
                  </div>
                  <div className="card-desc">
                    <h3 className="text-center">Graphic Designing</h3>
                    <br />
                    <Link
                      to="/login"
                      className="btn-card btn-block text-center btn-info"
                      style={{ textDecoration: "none" }}
                    >
                      Post Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
