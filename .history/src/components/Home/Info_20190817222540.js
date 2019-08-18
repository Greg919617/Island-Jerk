import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";
import logo2 from "../../images/logo2.png";


const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};

export default function Info() {
  return (
    <section className="py-5">
      <div className="info-background-image">
      <div className="container pt-3">
        <Title title="Our Mission" />
        
        <div style={divStyle} className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white bg-success my-5 ">
            Serve only the highest quality product, prepare it in a clean and sparkling environment, and serve it in a warm and friendly manner.
                        </p>
            <Link >
              <button className="btn text-uppercase btn-white pb-2">
                Menu
                <img src={logo2} alt="logo" alt="Avatar" styleClass="width:30px;height:30px;"/>
              </button>
            </Link>
          </div>
        </div>
<div className="row">
        <div class="card bg-dark text-white">
  <img className="card-img" src="..." alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>
</div>
      </div>
      </div>
    </section>
  );
}