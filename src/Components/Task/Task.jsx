import React from "react";

const Task = (props) => {
  console.log(props);
  console.log(props.name);
  const number = 2;
  props.getNumber(number);
  return <div></div>;
};

export default Task;
