import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="info-background-image">
        <Title title="Our Mission" />
        
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white bg-dark mb-5">
            Serve only the highest quality product, prepare it in a clean and sparkling environment, and serve it in a warm and friendly manner.
                        </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
