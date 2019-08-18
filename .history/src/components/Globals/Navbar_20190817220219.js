import React, { Component } from "react";
import { Link } from "gatsby";
import logo2 from "../../images/logo2.png";
import { FaCartArrowDown } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse ",
    links: [
      {
        id: 1,
        path: "/",
        text: "home"
      },
      {
        id: 2,
        path: "/about",
        text: "about"
      },
      {
        id: 3,
        path: "/contact",
        text: "contact"
      }
    ]
  };
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show"
        });
  };
  render() {
    return (
   
      <nav className="navbar sticky-top navbar-expand-sm bg-success navbar-light ">
        
        <Link to="/" className="navbar-brand">
          
          <img src={logo2} alt="logo" />
         
        </Link>
        
        <button
          className="navbar-toggler "
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  
                  <Link exact to={link.path} activeclassName="nav-link text-capitalize navbar-item">
                    {link.text}
                  </Link>
                </li>
              );
            })}

          </ul>
        </div>
      </nav>
      
    );
  }
}