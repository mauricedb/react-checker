import React from "react";
import ReactDOM from "react-dom";

class Greeter extends React.Component {
  render() {
    return (
      <span>Hello {this.props.firstName} {this.props.lastName}</span>
    );
  }
}

ReactDOM.render(
  <Greeter firstName="Maurice" lastName="de Beijer" />,
  document.getElementById("app")
);
