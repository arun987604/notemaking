import React, { Component } from 'react'
import './split.css';

var ul = document.createElement('ul');
ul.setAttribute('id','proList');
export default class Splitscreen extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username : ''
        }
        this.updateInput = this.updateInput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(){
       if(this.state.username!==""){
        console.log('Your input value is: ' + this.state.username);
        document.getElementById('renderList').appendChild(ul);
        var li = document.createElement('li');
        var t = document.createTextNode(this.state.username);
            li.appendChild(t);
                    var x = document.createElement("SPAN");
                    x.setAttribute('class','close');
                    var tt = document.createTextNode("x");
                    x.appendChild(tt);
                    li.appendChild(x);
            ul.appendChild(li);
            document.getElementById("myTextarea").value = " ";
            this.setState({username:''});
            
                                            function cross(){
                                                var closebtns = document.getElementsByClassName("close");
                                                var i;

                                                for (i = 0; i < closebtns.length; i++) {
                                                closebtns[i].addEventListener("click", function() {
                                                    this.parentElement.style.display = 'none';
                                                });
                                                    }
                                                 }
            cross();
            
       }
       else{
           alert("Please add some data.");
       }
        
        }
        updateInput(event){
            this.setState({username : event.target.value})
            }
    render() {  
         
        return (
            <div className="top">
                    <div className="split left">
                            <h2 >Note down your things here.</h2>
                            <textarea id="myTextarea" type="reset" defaultValue=""  onChange={this.updateInput} className="data" rows="35" cols="100" >
                            </textarea>
                            <br></br>
                            <button  onClick={this.handleSubmit}>submit</button>
                    </div>

                    <div className="split right">
                    <div id="renderList" className="scrollit"></div>
                        
                    </div> 
            </div>
        );
    }
}
