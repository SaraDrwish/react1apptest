import {React , useState} from "react"; 
// import code from "data1";
import Code from "./data1";
import "./App.css";


function App() {

  const style1 = {
    background: "red",
    color:"red"
  }

  
  return (

    <div className="bigBox"     style={ style1 }  >
            <Code name="Sara" age="25" city="madina" />
            <Code name="Adel" age="58" city="madina" />

      {/* <h2>Sara</h2>
      <h2>25 y</h2> */}

      
    </div>
    // React.createElement("h2" , null , "sara adel" )
  );
}

export default App;