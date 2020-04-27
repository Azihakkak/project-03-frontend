import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
    <div className="container-fluid padding">
      <div className="row padding">
        <div className="col" >
          <img src="images/landing-img.jpg" className="img-fluid main-img" />
            <div class="carousel-caption">
              <h1>WE BRING BEAUTY TO YOU</h1>
              <h3>In-home makeup services</h3>
              <h3>Anytime Anywhere</h3>
              <button type="button"
              className="btn btn-outline-light btn-lg">
              BOOK SOME SELF CARE
              </button>
            </div>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row jumbotron">
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
          <p className="lead">GlamB offers in-home makeup services by the top professional Makeup Artists.</p>
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
            <p className="lead">We provide you the best experience that you could ever imagine, and make you feel amazing for your day.</p>
          </div>
      </div>
    </div>

    <div className="container-fluid padding">
      <div className="row text-center padding">

        <div className="col-xs-12 col-sm-6 col-md-4">
          <i className="fas fa-coffee"></i>
          <p>we come to you</p>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4">
          <i className="fas fa-bold"></i>
          <p>we come to you</p>
        </div>

        <div className="col-sm-12 col-md-4">
          <i className="fab fa-css3"></i>
          <p>we come to you</p>
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
          <Link to="/services" style={{'text-decoration': 'none', 'color': 'white'}}>
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
