import React from "react";
import ReactDOM from "react-dom";

class Greeter extends React.Component {
  greet = () => {
    alert("Hello " + this.props.firstName);
  }
  render() {
    return (
      <span> 
        <button onClick={this.greet}>
          Greet
        </button>
      </span>
    );
  }
};

ReactDOM.render(
  <Greeter firstName="Maurice" />,
  document.getElementById("app")
);
