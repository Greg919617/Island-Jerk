import React from "react";
import { graphql } from "gatsby";
import Carousel from "../components/Carousel";


import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
     
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