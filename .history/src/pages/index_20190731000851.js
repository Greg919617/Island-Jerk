import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
const IndexPage = ({ data }) => (
  <Layout>
     <SEO title="Jamaican Food in Huntsville"  keywords={[`jamaican`,
     `delivery`, `jerk-island`]}/>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Island Jerk"
    />
    <Info />
    <Menu items={data.menu}/>
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "lemonlady.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allContentfulMenuItem{
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
            fixed(width:50, height:50){
              ...GatsbyImageSharpFluid_tracedSVG 
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;