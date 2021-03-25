// function Mainkeys(props) {
//     return(
//         <div className="row col2">
// 				<div className="col-md-3 row1 firstcol">{props.keyvalue1}</div>
// 				<div className="col-md-3 row1">{props.keyvalue2}</div>
// 				<div className="col-md-3 row1">{props.keyvalue3}</div>
// 				<div className="col-md-3 row1col4">{props.keyvalue4}</div>
// 		</div>
//     )
// }

import { Component } from "react";

class Mainkeys extends Component{
	render(){
		return(
			<div className="row col2">
				<div className="col-md-3 row1 firstcol">{this.props.keyvalue1}</div>
				<div className="col-md-3 row1">{this.props.keyvalue2}</div>
				<div className="col-md-3 row1">{this.props.keyvalue3}</div>
				<div className="col-md-3 row1col4">{this.props.keyvalue4}</div>
		</div>
		)
	}
}
export default Mainkeys