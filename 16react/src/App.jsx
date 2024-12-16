import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(10)
function Fatima() {
  setNumber(number+1)
}
function Decrease() { 
  setNumber(number-1)
}

const App = () => {
  const [Helloworld, setHelloWorld] = useState('Hello world')};

  const handleChangeText = () => {
    setText('Change');
};
  return (
    <>
<button>{Fatima}</button>
<span>{number}</span>
<button>Decrease</button>
<h1>Hello World</h1>
<button onClick={handleChangeText}>Change</button>


  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">Open Modal</button>


        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
        <p>Some text. Some text. Some text.</p>
        <p>Some text. Some text. Some text.</p>
    </>
  )
}

export default App