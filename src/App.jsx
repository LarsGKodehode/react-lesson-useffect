// CSS
import './styles/basic.css'
import './styles/global.css'
import './styles/lengths.css'
import './styles/palette.css'

// Libraries
import { useState, useEffect } from 'react'
import FetchData from './commponents/FetchData'

function App() {
  const [ state, setState ] = useState(false)
  const [ count, setCount ] = useState(0)

  // This will only be run when mounting the componet
  useEffect(
    () => {
      console.log("Rendering component")
    },
    []
  )

  // We want this to run when count changes
  useEffect(
    () => {
      console.log("count changed")
    },
    // only use JavaScript primitive types, bool, number or string
    [count]
  )

  return (
    <>
    <h1>Use Effect Test: {state ? "true" : "false"}</h1>
    <button onClick={() => setState((previousState) => !previousState)}>Toggle</button>

    <h1>Count: {count}</h1>
    <button onClick={() => setCount((oldCount) => oldCount + 1)}>Increment</button>

    <h1>Poke API</h1>
    <FetchData />
    </>
  );
}

export default App;
