import React, { Component } from 'react' ;

class Input extends Component {
    render() {
        
        return (
            <div>
                <div>
                <input type = "number"
                 onChange={this.props.change}/>
                </div>
               
                
            </div>
        );
    }

}   
export default Input ;