// function Subkeys(props) {
//     return(
//         <div className="row c0l2">
// 				<div className="col-md-6 row1 row6 firstcol">{props.keyvalue1}</div>
// 				<div className="col-md-3 row1 row6">{props.keyvalue2}</div>
// 				<div className="col-md-3 row1col4 row6">{props.keyvalue3}</div>
// 		</div>
//     )
// }

import { Component } from "react";

class Subkeys extends Component{

render(){
	return(
		<div className="row c0l2">
 				<div className="col-md-6 row1 row6 firstcol">{this.props.keyvalue1}</div>
 				<div className="col-md-3 row1 row6">{this.props.keyvalue2}</div>
 				<div className="col-md-3 row1col4 row6">{this.props.keyvalue3}</div>
 		</div>
	)
}


}
export default Subkeys