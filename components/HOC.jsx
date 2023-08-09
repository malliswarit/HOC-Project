import React from 'react';

function UpdatedComponent(OriginalComponent, incrementValue) {
  return function NewComponent(props) {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
      setCount(props.initVal + incrementValue);
      props.updateValue(props.initVal + incrementValue);
    };

    console.log(count);
    return (
      <>
        <OriginalComponent {...props} handleClick={handleClick} count={count} />
      </>
    );
  };
}

export default UpdatedComponent;
