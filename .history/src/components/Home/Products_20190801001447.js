import React from 'react'
import Product from "./Product"
import Title from '../Globals/Title'
import {StaticQuery, graphql} from "gatsby";

export default function Products() {
    return <StaticQuery query={graphql`
    {
    products:allContentfulSpecialProduct{
          edges{
            node{
              id
              title
              price
              image{
                fluid(maxHeight:426){
                  src
                }
              }
            }
          }
        }
      }`} render={data =>{
        return<h1>hello world</h1>
    }}/>
}