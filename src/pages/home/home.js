import React, {useEffect, useRef, useState, memo, useCallback} from 'react';
import {useOnClickOutside} from "../../clickOutsideHook";

// useState *
// useEffect *
// useRef *
// useCallback
// useMemo
// useContext
// custom hook

const Home = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (!ref?.current) return;

    if (counter === 5) {
      ref.current.style.background = 'red'
    } else {
      ref.current.style.background = 'transparent'
    }
  }, [counter, ref]);

  const increaseCounterCallback = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  const decreaseCounterCallback = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  return (
    <div className="wrapper">
      <h1>Hi there</h1>
      <div ref={ref} style={{
        padding: '20px',
        border: '1px solid',
      }}>
        <button onClick={increaseCounterCallback}>+</button>
        <span>{counter}</span>
        <button onClick={decreaseCounterCallback}>-</button>
      </div>
      <div style={{
        padding: '20px',
        border: '1px solid',
        marginLeft: '10px'
      }}>
        just some text
      </div>
      <h3>Build with Redux-Saga, React, React Router</h3>
    </div>
  );
}

export default memo(Home);
