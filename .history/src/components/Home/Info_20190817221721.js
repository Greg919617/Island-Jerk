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
      <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        <Title title="Our Mission" />
        
        <div style={divStyle} className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white bg-success my-5 ">
            Serve only the highest quality product, prepare it in a clean and sparkling environment, and serve it in a warm and friendly manner.
                        </p>
            <Link href="#menu">
              <button className="btn text-uppercase btn-white pb-2">
                Menu
                <img src={logo2} alt="logo" alt="Avatar" styleClass="width:30px;height:30px;"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}