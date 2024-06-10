import { Component } from "react";



class Count extends Component{

    constructor(props){
        super(props)
        this.state={count : 0}
    }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }

    render(){
        return(
            <div className="main">
                <div className="sub">
                    <h1>Counter</h1>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.increment}>Add</button>
                    <button onClick={this.decrement}disabled={this.state.count===0}>Remove</button>
                </div>
            </div>
        )
    }
}

export default Count