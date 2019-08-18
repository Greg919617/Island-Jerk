import React from "react";
// import styles from "../css/footer.module.css"
// import socialIcons from "../constants/social-icons"

export default function Footer() {
  return (

    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h6>
              all rights reserved &copy;{new Date().getFullYear().toString()}
            </h6>
            <h6>Site by JonesAffectsGraphix</h6>
          </div>
        </div>
      </div>
      
      
    </footer>



    
  );
}
