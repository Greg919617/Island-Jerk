import React from 'react'
import Product from "./Product"
import Title from '../Globals/Title'
import {StaticQuery, graphql} from "gatsby";

const getProducts = graphql`
{
products:allContentfulSpecialProduct{
      edges{
        node{
          id
          title
          price
          image{
            fluid(maxHeight:426){
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }`

export default function Products() {
    return <StaticQuery 
    query={getProducts} 
    render={data =>{
        return<h1>hello world</h1>
    }}
    />
}