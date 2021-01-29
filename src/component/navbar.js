import React, { Component } from 'react';
import './style.css';
import { BsFillHouseFill,BsCollection,BsFileEarmarkPlus } from "react-icons/bs";

 class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : ''
        }

        this.myFunction = this.myFunction.bind(this);
    }
    
   
     myFunction(){
        var x = document.getElementById("renderList");
        var xx = document.getElementById("disp");
        if (x.style.display === "none") {
          x.style.display = "block";
          xx.textContent = "Hide List"; 
        } else {
          x.style.display = "none";
          xx.textContent = "View List"; 
        }
      }
    render() {
        
        
        return (
            <div className="topnav">
                <a  href="#" ><BsFillHouseFill></BsFillHouseFill>Waiting for new features</a>
                <a   href="#"> <BsFileEarmarkPlus></BsFileEarmarkPlus>Waiting for new features</a>
                <a  id="disp" href="#" onClick={this.myFunction}><BsCollection></BsCollection>view</a>
                
            </div>

        )
    }
 }


export default Navbar;