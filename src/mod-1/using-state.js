import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  state = {
    time: ''
  }

  componentDidMount() {
    setInterval(() => this.setState({
        time: new Date().toLocaleTimeString()
    }), 1000)
  }

  render() {
    return (
      <span>Time: {this.state.time}</span>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById("app")
);
