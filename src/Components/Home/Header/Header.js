import React from 'react';
import './Header.css'
import cover from '../../../images/cover.jpg'

const Header = () => {
    return (
      <section className="background-color">
          <div className="container">
              <div className="row">
                  <div className="col-md-5 text-center pt-5">
                      <h1><span style={{color:'white'}}>Pure Honey <br/> Be Healthy</span></h1>
                      <p className="text-secondary"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam unde autem! Error, molestiae ipsa.</small></p>
                      <button className="btn btn-primary">Learn More</button>
                      {/* #C58F00 color */}
                  </div>
                  <div className="col-md-7">
                      <img style={{height: '', width:'700px'}} className="img-fluid" src={cover} alt=""/>
                  </div>

              </div>
          </div>
      </section>
    );
};

export default Header;