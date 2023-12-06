
import './App.css'
import {useState} from "react";
import { Link, Route, Routes } from "react-router-dom";
import DigitalCurrency from "./views/digital-currency/DigitalCurrency";
import ImdbTracker from "./views/imdb-tracker/ImdbTracker";
function App() {
  const [count, setCount] = useState(1)

  return (
    <>
        <Routes>
            <Route path="/" element={<DigitalCurrency />} />
            <Route path="/imdb-tracker" element={<ImdbTracker />} />
        </Routes>
    </>
  )
}

export default App
