import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function addCount() {
    console.log(count);
    setCount(count + 1);
  }

  function reduceCount() {
    console.log(count);
    setCount(count - 1);
  }
  function resetCount() {
    console.log(count);
    setCount(0);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={addCount}>add count</button>
      <button onClick={reduceCount}>reduce count</button>
      <button onClick={resetCount}>reset</button>
    </>
  );
}

export default App;
