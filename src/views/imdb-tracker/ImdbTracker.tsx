import {useState} from "react";

const ImdbTracker = () => {
  const [count, setCount] = useState(1)

  return (
    <>
        <h1 className="text-3xl font-bold underline">
            ImdbTracker
        </h1>
    </>
  )
}

export default ImdbTracker
