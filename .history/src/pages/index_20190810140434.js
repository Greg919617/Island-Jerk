import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
// import Products from "../components/Home/Products";
// import Contact from "../components/Home/Contact";






const IndexPage = ({ data }) => (
  <Layout>
     <SEO title="Jamaican Food in Huntsville"  keywords={[`jamaican`,
     `delivery`, `jerk-island`]}/>
    <BackgroundSection title="M&K"/>
    <Info />
    <Menu items={data.menu}/>
    <section>
  
    <div class="container">
      <div class="row">
        <div class="col s12 m6 offset-m6">
          <div class="card-panel z-depth-5">
            <h4>Contact Us</h4>
           
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
