import React from "react";
import { RoundList } from "./component/Round";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RoundList />
      </div>
    );
  }
}

export default App;
