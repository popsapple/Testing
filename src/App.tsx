import React from "react";
import { RoundList } from "./component/Round";
// Redux 관련 불러오기
import { createStore } from "redux";
import { hovering } from "./reducers/winner.reducer";
import { Provider } from "react-redux";
import "./App.scss";

// 스토어 생성
const store = createStore(hovering);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <RoundList />
        </div>
      </Provider>
    );
  }
}

export default App;
