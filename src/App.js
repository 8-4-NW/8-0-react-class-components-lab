// import interpolated Component
import { Component } from "react";
import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }


// REFRACTOR - class - constructor(){ - super()
class App extends Component {
  constructor() {
    super();
  }
    // REFRACTOR - render(){}
  render()  {
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
      </div>
    );
  }
}

export default App;
