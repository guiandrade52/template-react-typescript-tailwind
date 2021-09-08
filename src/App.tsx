import React, { useEffect, useState } from 'react';
import { Button, Input, TextField } from '@material-ui/core';
import { countReset } from 'console';

function App() {
  const [count, setCount] = useState(0)

  function addCount() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Template React, Tailwind + Typescript</h1>
      <TextField id="outlined-basic" label="Contador" variant="outlined" value={count}/>
      <Button color="primary" onClick={addCount}>Adicionar</Button>;
    </>
  );
}

export default App;
