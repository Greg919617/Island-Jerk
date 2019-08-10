import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
// import Products from "../components/Home/Products";
// import Contact from "../components/Home/Contact";


function showGoogleMaps() {
  // Map positions
  const latLng = new google.maps.LatLng(position[0], position[1]);
  const centerLatLng = new google.maps.LatLng(centerPosition[0], centerPosition[1]);

  // Map options
  const mapOptions = {
    zoom: 12,
    streetViewControl: false,
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: centerLatLng
  }

  // Create map
  map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

  // Show Marker
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  });
}

// Maps event
function GoogleMapsEvent() {
google.maps.event.addDomListener(window, 'load', showGoogleMaps);

};






const IndexPage = ({ data }) => (
  <Layout>
     <SEO title="Jamaican Food in Huntsville"  keywords={[`jamaican`,
     `delivery`, `jerk-island`]}/>
    <BackgroundSection title="M&K"/>
    <Info />
    <Menu items={data.menu}/>
    <section id="contact" class="section section-contact center scrollspy">
    <div id="googlemap"></div>
    <div class="container">
      <div class="row">
        <div class="col s12 m6 offset-m6">
          <div class="card-panel z-depth-5">
            <h4>Contact Us</h4>
            <div class="input-field">
              <input type="text" id="name" placeholder="Name"/>
              <label for="name">Name</label>
            </div>
            <div class="input-field">
              <input type="email" id="email" placeholder="Email"/>
              <label for="email">Email</label>
            </div>
            <div class="input-field">
              <input type="text" id="phone" placeholder="Phone Number"/>
              <label for="phone">Phone</label>
            </div>
            <div class="input-field">
              <textarea class="materialize-textarea" id="message" placeholder="Message"></textarea>
              <label for="message">Message</label>
            </div>
            <input type="submit" value="Submit" class="btn blue-grey"/>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  </Layout>
);

export const query = graphql`
  {

    menu: allContentfulMenuItem{
      edges{
        node{
          id
          title
          description{
            description
          }
          price
          category
          image{
            fixed(width:70, height:70){
              ...GatsbyContentfulFixed_tracedSVG 
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
