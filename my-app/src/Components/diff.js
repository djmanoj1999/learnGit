import React, { Component } from 'react' ;
import Input from './input';
class Diff extends Component {
    state = {
        msg : "Percentage Gain/Loss",
        answer: null,
        ip1 : null , 
        ip2: null , 
    };
setip1 =(event) => {
    this.setState({ip1:event.target.value});  
    this.setState({answer: "Loading ..."})
}
setip2 =(event) => {
    this.setState({ip2:event.target.value});
    this.setState({answer:"Loading ..."})
}
calculate = (event) => {
    let val1 = parseFloat(this.state.ip1 , 10) ; 
    let val2 = parseFloat(this.state.ip2 , 10) ;
    let ans = ((val2-val1) / val1) * 100  ;
    this.setState({answer: ans.toFixed(2) + "%"});
}

inputFeild = () => {
    this.setState({answer:"Calculating"});   
};
 render(){
     return (
     <div >
          <h1 className ="percentage" onClick={this.inputFeild}>
            {this.state.msg}
         </h1>
         Buying Price :<Input click={this.inputFeild}
         change={this.setip1.bind(this)}/>

         Selling Price :<Input click={this.inputFeild}
         change={this.setip2.bind(this)}/>
         <button onClick={this.calculate}>CALCULATE </button>
         
         <h3>
           Percentage profit:<h2>{this.state.answer}</h2>
         </h3>

     </div>
        
     );
 }   
}
export default Diff ;