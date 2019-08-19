import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";



const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};

export default function InfoAbout() {
  return (
    <section className="">
      <div className="info-background-image">
      <div className="container pt-5">
        <Title title="About Us" />
        
        <div style={divStyle} className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white bg-success my-5 ">
            Serve only the highest quality product, prepare it in a clean and sparkling environment, and serve it in a warm and friendly manner.
                        </p>
            <Link to="/contact/">
              <button className="btn text-uppercase btn-white pb-2">
                Learn More
                
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}