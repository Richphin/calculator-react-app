// function Displayscreen(props) {
//     return(
//         <div className="row">
// 				<div className="col-md-12 text-right col1">{props.displayvalue}</div>
// 		</div>
//     )
// }

import  { Component } from 'react';

class Displayscreen extends Component{
  
  render(){
    return(
      <div className="row">
    				<div className="col-md-12 text-right col1">{this.props.displayvalue}</div>
    	</div>
    )
    
  }
}







export default Displayscreen