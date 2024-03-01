import './App.css'
import { useState } from 'react'
import { GenericForm, Output } from './components';

function App() {

  const [output, setOutput] = useState('...')

  const sendPrompt = async (prompt) => {
    const response = await fetch('http://localhost:3000/openai/generic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: prompt })
    })
    const data = await response.json()
    console.log(data)
    setOutput(data.message.content)
  }

  return (
    <>
      <div className="App">
        <GenericForm sendPrompt={sendPrompt} />
        <Output output={output} />
      </div>
    </>
  )
}

export default App
