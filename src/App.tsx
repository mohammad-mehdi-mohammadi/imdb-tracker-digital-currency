
import './App.css'
import {useState} from "react";

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
        <h1 className="text-3xl font-bold underline">
            Hello world! {count}
        </h1>
    </>
  )
}

export default App
