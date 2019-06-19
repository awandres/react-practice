import React from "react";
import TextField from './TextField'

const Greetings = ({firstName, lastName}) => (
  <div> Hey you! {firstName} {lastName}! </div>
);

export default Greetings;
