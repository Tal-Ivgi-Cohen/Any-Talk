import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { NavLink } from 'react-router-dom'

export class Hero extends React.Component {

  render() {
    return (
      <div className="carousel-container">
        <div className="main-hero-content">
          <h1>Welcome to Any-Talk!</h1>
        <NavLink className="login-btn" to="/login">Login</NavLink>
        </div>
      
          <Carousel className="heros-container">
            <img src="//cdn.pixabay.com/photo/2021/06/18/20/56/social-networks-6347153_960_720.jpg" alt="social-networks" />
            <img src="//cdn.pixabay.com/photo/2016/12/13/07/25/email-1903444_960_720.jpg" alt="email" />
            <img src="//cdn.pixabay.com/photo/2018/11/26/21/28/telephone-3840285_960_720.jpg" alt="telephone" />
          </Carousel>
        </div>

    );
  }
}
