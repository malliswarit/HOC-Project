import React from 'react';
import HOC from './HOC';

const ComponentA = (props) => {
  return (
    <>
      <button onClick={() => props.handleClick()}>Button1 </button>
    </>
  );
};
export default HOC(ComponentA, 2);
