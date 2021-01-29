import React, { Component } from 'react'
import './style.css';

export default class Restofpage extends Component {
    render() {
        return (
            <div>
                {/* <input type="text"  name="firstname" placeholder="Your name.." required></input> */}
                <h2 >Note down your things here.</h2>
                <textarea  className="data" rows="35" cols="100" >
                </textarea>
                <br></br>
                <button >submit</button>
            </div>
            
        )
    }
}

