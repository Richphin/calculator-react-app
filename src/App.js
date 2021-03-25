
import Description from "./description";
import Displayscreen from './Displayscreen';
import Mainkeys from './Mainkeys';
import Subkeys from './Subkeys';

import  React,{Component} from "react";

// function App() {
//   return (
    // <div className="container">
    //   <Description/>
    //   <Displayscreen displayvalue="0"/>
    //   <Mainkeys keyvalue1="ac" keyvalue2="+/-" keyvalue3="%" keyvalue4="÷"/>
    //   <Mainkeys keyvalue1="7" keyvalue2="8" keyvalue3="9" keyvalue4="x"/>
    //   <Mainkeys keyvalue1="4" keyvalue2="5" keyvalue3="6" keyvalue4="-"/>
    //   <Mainkeys keyvalue1="1" keyvalue2="2" keyvalue3="3" keyvalue4="+"/>
    //   <Subkeys  keyvalue1="0" keyvalue2="." keyvalue3="="/>
    // </div>
//   );
// }

class App extends Component {
 
   render (){
    return (
      <div className="container">
      <Description/>
      <Displayscreen displayvalue="0"/>
      <Mainkeys keyvalue1="ac" keyvalue2="+/-" keyvalue3="%" keyvalue4="÷"/>
      <Mainkeys keyvalue1="7" keyvalue2="8" keyvalue3="9" keyvalue4="x"/>
      <Mainkeys keyvalue1="4" keyvalue2="5" keyvalue3="6" keyvalue4="-"/>
      <Mainkeys keyvalue1="1" keyvalue2="2" keyvalue3="3" keyvalue4="+"/>
      <Subkeys  keyvalue1="0" keyvalue2="." keyvalue3="="/>
    </div>
        )
   }
}


export default App;
