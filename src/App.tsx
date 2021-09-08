import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  function addCount() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Template React, Tailwind + Typescript</h1>
      {count}
      <button onClick={addCount}>Clique para adicionar.</button>
    </>
  );
}

export default App;
