import { Component } from "react";
import './Navbar.css';
export class MyClassComponent extends Component{

    constructor(){
        super();
        this.state ={
            counterValue : 0
        }
    }

    render(){
        return(
            <div className ='Container'>
                <button className="up" onClick = {()=>{
                    this.setState((currentState) =>{
                        return {
                            counterValue: currentState.counterValue +1
                        }
                    })
                }}>
                    increment button
                </button>

                <button className="down" onClick = {()=>{
                    this.setState((currentState)=>{
                        return {
                            counterValue: currentState.counterValue-=1
                        }
                    })
                }}>

                decrement button
                </button>
                <span className ="amount">{this.state.counterValue}</span>
            </div>
        )
    }
}