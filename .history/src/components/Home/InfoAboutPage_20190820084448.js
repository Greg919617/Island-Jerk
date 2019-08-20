import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";



const divStyle = {
  margin: '',
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
          M & K is a casual dining restuarant of Huntsville known for its exceptionality and touch of simplicity 
          that is as unique as is the name. 
          </p>
          <p>
          We take pride in offering delicious authentic jamaican food with family recipes passed down from generations, 
          and homemade drinks which provide many natural health benefits. We bring to you a wide series of jamaican curry, mouth watering jerk chicken, 
          and refreshing gingerroot lemonade.</p>
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