import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor is called ");
  }

  componentDidMount() {
    console.log("Parent componentDidMount is called ");
  }

  render() {
    console.log("Parent render is called ");
    return (
      <div>
        <h1>About us</h1>
        <h2>This is the about us page</h2>

        <UserClass name={"Rithesh (Class component)"} />
      </div>
    );
  }
}

export default About;
