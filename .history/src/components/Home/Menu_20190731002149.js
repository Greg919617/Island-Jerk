import React, { Component } from 'react'
import Title from"../Globals/Title"
import Img from "gatsby-image"


export default class Menu extends Component {
constructor(props){
    super(props);
    this.state={
        items:props.items.edges,
        menuItems:props.items.edges
    };
}
    render() {
        return ( <div>fgdfgdfg</div>
        )
    }
}
