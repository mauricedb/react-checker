import React from "react";
import ReactDOM from "react-dom";

class UserForm extends React.Component {
  constructor() {
    super();
    setInterval(() => console.log(this.getValue()), 1000);
  }
  getValue() {
    return this.firstName.value;
  }
  render() {
    return (
      <form>
        <input type="text" ref={input => (this.firstName = input)} />
      </form>
    );
  }
}

ReactDOM.render(<UserForm />, document.getElementById("app"));
