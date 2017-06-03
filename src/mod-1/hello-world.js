import React from "react";
import ReactDOM from "react-dom";

class OtherComponent extends React.Component {
  render() {
    return <span>Hello from React</span>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>ReactJS</h2>
        <OtherComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, 
  document.getElementById("app"));

export default App;
