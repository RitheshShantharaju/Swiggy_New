//This is a Class based component

// While Recieving props from About.js Component we recieve like this else it is normal class based component
//While recieving props we use constructor (props ) and super(props)

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor is called ");

    this.state = {
      count: 0,
      count2: 1,
    };
  }
  componentDidMount() {
    console.log("Child componentDidMount is called ");
  }

  render() {
    const {name} = this.props;
    const {count} = this.state;
    console.log("child render is called ");
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h1>count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment button
        </button>

        <h2>Location : Bangalore</h2>
        <h3>mailId:rithesh@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
