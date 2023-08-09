import React from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import './style.scss';
import './App.css';
export const App = () => {
  const [count, setCount] = React.useState(0);

  const updateCount = (value) => {
    setCount(value);
  };

  return (
    <div className=" p-2 test">
      <h1> {count} </h1>
      <ComponentA updateValue={updateCount} initVal={count} />
      <ComponentB updateValue={updateCount} initVal={count} />
      <ComponentC updateValue={updateCount} initVal={count} />
    </div>
  );
};
