//This is a functional component

import {useState} from "react";

// While Recieving props from About.js Component we recieve like this else it is normal component
//While recieving props we use props and then destrcuture to the name used in this component
//Name used while defining a prop in the About.js component while rendering a Class component, the same name should be used here as well
//i.e using the same name while recieving the prop as well

const User = ({name}) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Name : {name}</h1>
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>

      <h2>Location : Bangalore</h2>
      <h3>mailId:rithesh@gmail.com</h3>
    </div>
  );
};

export default User;
