import React, { Component } from "react";
import CardList from "./CardList.js"
import cardList from "./cardListObjects"

class App extends Component {
  constructor() {
    super()

  }



  render() {
    
    

    return (
      <div className="container">
        <div className="card-container">
          <CardList Data={cardList} />
        </div>
        
      </div>
    );
  }
}

export default App;