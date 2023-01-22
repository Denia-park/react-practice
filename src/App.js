import { useEffect, useState } from 'react'

function Hello() {
    function byFn() {
        console.log('Bye :(')
    }

    function hyFn() {
        console.log('Hello :)')
        return byFn() // Cleanup function
    }

    useEffect(hyFn, [])

    return <h1>Hello</h1>
}

function App() {
    const [count, setCount] = useState(0)
    const [keyword, setKeyword] = useState('')
    const onChange = (event) => {
        setKeyword(event.target.value)
    }
    const onClick = () => {
        setCount((prevState) => prevState + 1)
    }
    console.log('i run all the time')
    useEffect(() => {
        console.log('i run only once')
    }, []) // 처음에 render 될 때 딱 1번만 실행되야하는 함수를 넣자.
    useEffect(() => {
        console.log('i run when "keyword" changes.')
    }, [keyword])
    useEffect(() => {
        console.log('i run when "count" changes.')
    }, [count])
    useEffect(() => {
        console.log('i run when "keyword && count" changes.')
    }, [keyword, count])
    return (
        <div className="App">
            <input value={keyword} onChange={onChange} type="text" placeholder={'Search here...'} />
            <h1>{count}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}

export default App
