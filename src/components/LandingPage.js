import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
    <div className="container-fluid padding">
      <div className="row padding">
        <div className="col" >
          <img src="images/landing-img.jpg" className="img-fluid main-img" />
            <div className="carousel-caption">
              <h1>WE BRING BEAUTY TO YOU</h1>
              <h3>In-home makeup services</h3>
              <h3>Anytime Anywhere</h3>
              <Link to="/services">
                <button type="button"
                className="btn btn-outline-light btn-lg">
                BOOK SOME SELF CARE
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>



    <div className="container-fluid padding">
      <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Welcome to GlamB!</h1>
          </div>
        <hr id="welcome"/>
          <div className="col-12">
            <p className="lead">Beauty begins the moment you decide to be yourself.</p>
          </div>
      </div>
    </div>

    <div className="container-fluid padding">
      <div className="row text-center padding">

        <div className="col-xs-12 col-sm-6 col-md-4">
        <i className="fa fa-car" aria-hidden="true"></i>
          <p className="lead">We come to you</p>
          <p>Whether in your home or hotel, sit back and relax as we bring the best service straight to your door.</p>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4">
          <i className="fa fa-star" aria-hidden="true"></i>
          <p className="lead">Work only with experts</p>
          <p>Every Makeup Artist is put through testing before being accepted into our network.</p>
        </div>

        <div className="col-sm-12 col-md-4">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <p className="lead">Select your date and time</p>
          <p>Every Makeup Artist is put through testing before being accepted into our network.</p>
        </div>
      </div>
      <hr className="my-4"/>
    </div>

    <div className="container-fluid padding">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 className="display-5">Check out our services</h1>
        </div>
        <hr id="welcome"/>
      </div>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xs-12 col-sm-6 col-md-6">
          <Link to="/services" style={{'textDecoration': 'none', 'color': 'white'}}>
            <div className="card" id="lp-card">
              <div className="card-body" >
                <h4 className="card-title">MAKEUP</h4>
                <p className="card-text">Natural, sexy or dramatic-we'll achieve your perfect look.</p>
                <p className="card-text">Starting at $90</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <hr/>
      </div>

    <div className="container-fluid padding" id="connect">
      <div className="row text-center padding">
        <div className="col-12">
          <h2>Connect</h2>
        </div>
        <div className="col-12 social padding">
          <a href="#"><i className="fab fa-facebook" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
        </div>
      </div>
    </div>

    <footer>
      <div className="container-fluid padding">
        <div className="row text-center">
          <div className="col-12">
          <hr className="my-4"/>
          <h5>&copy; GlamB.com</h5>
          </div>
        </div>
      </div>
    </footer>

</div>
  )
}
