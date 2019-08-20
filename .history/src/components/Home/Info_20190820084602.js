import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";



const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};

export default function Info() {
  return (
    <section className="">
      <div className="info-background-image">
      <div className="container pt-5">
        <Title title="Our Mission" />
        
        <div style={divStyle} className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white bg-dark my-5 ">
            Jamaican Cuisine of the highest quality prepared in a wholesome enviroment and served with a warm friendly heart.            
            </p>
            <Link >
          
            </Link>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}