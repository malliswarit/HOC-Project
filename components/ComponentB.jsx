import React from 'react';
import HOC from './HOC';
const ComponentB = (props) => {
  return (
    <>
      <button onClick={() => props.handleClick()}>Button2 </button>
    </>
  );
};
export default HOC(ComponentB, 20);
