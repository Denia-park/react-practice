import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    const onClick = () => {
        setCount((prevState) => prevState + 1)
    }
    console.log('render')
    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}

export default App
