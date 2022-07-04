
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };
    
    handleIncrement = () =>{
        this.setState({ count: this.state.value + 1 });
    };



    render() { 
       
        // classes += (this.state.count === 0) ? "warning" : "primary";

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={this.handleIncrement}
                className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={()=> this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
        );
    }

getBadgeClasses(){
    let classes = "bg m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
}

formatCount(){
     
        const {count} = this.state;
        return count === 0 ? 'zero' : count;
    
}
}
 
export default Counter;