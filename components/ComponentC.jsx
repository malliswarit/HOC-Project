import React from 'react';
import HOC from './HOC';
const ComponentC = (props) => {
  return (
    <>
      <button onClick={() => props.handleClick()}>Button3 </button>
    </>
  );
};
export default HOC(ComponentC, 200);
