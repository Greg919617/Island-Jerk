import React from "react";
import { graphql } from "gatsby";
import Carousel from "../components/Carousel";


import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import BackgroundAboutSection from "../components/Globals/BackgroundAboutSection";
import Info from "../components/Home/Info";
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundAboutSection
      img={data.img.childImageSharp.fluid}
      title="About M&K"
      styleClass="about-background"
    />
    <Info />
    
  
    <Carousel/>
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "mkstore.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;