import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";
const IndexPage = ({ data }) => (
  <Layout>
     <SEO title="Jamaican Food in Huntsville"  keywords={[`jamaican`,
     `delivery`, `jerk-island`]}/>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="M&K Jamaican"
    />
    <Info />
    <Menu items={data.menu}/>
    <Products/>
    <Contact/>
  </Layout>
);
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
export const query = graphql`
  {
    img: file(relativePath: { eq: "m-kfront.png" }) 
    {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
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
