import React, {useState} from 'react';


const Counter = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(100)
  return (
    <>
    <div>count1:{count1}</div>
    <button onClick={() => setCount1(currentCount => currentCount + 1) }>+ count1</button>
    <div>count2:{count2}</div>
    <button onClick={() => setCount2(currentCount => currentCount - 1) }>- count2</button>
    </>
  );
}

export default Counter;