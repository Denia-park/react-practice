import { useEffect, useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    const onClick = () => {
        setCount((prevState) => prevState + 1)
    }
    console.log('i run all the time')
    useEffect(() => {
        console.log('CALL THE API...')
    }, []) // 처음에 render 될 때 딱 1번만 실행되야하는 함수를 넣자.
    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}

export default App
