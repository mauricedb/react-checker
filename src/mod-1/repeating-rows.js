import React from "react";
import ReactDOM from "react-dom";

class PersonRow extends React.Component {
  render() {
    const { person } = this.props;

    return (
      <tr>
        <td>{person.firstName}</td>
      </tr>
    );
  }
}

class PeopleTable extends React.Component {
  render() {
    const { people } = this.props;

    return (
      <table>
        <tbody>
          {people.map((person, index) => (
            <PersonRow key={index} person={person} />
          ))}
        </tbody>
      </table>
    );
  }
}

ReactDOM.render(
  <PeopleTable
    people={[
      {
        firstName: "Maurice"
      },
      {
        firstName: "Kai"
      }
    ]}
  />,
  document.getElementById("app")
);
