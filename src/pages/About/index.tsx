import React from "react";
import { Counter } from "../../app/features/counter/Counter";

const About = () => {
  // The `state` arg is correctly typed as `RootState` already

  return (
    <React.Fragment>
      <h1>About Me</h1>
      <Counter />
    </React.Fragment>
  );
};

export default About;
