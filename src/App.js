import { useState } from 'react'

function App() {
    const [toDo, setToDo] = useState('')
    const [toDos, setToDos] = useState([])
    const onChange = (event) => setToDo(event.target.value)
    const onSubmit = (event) => {
        event.preventDefault()
        if (toDo === '') {
            return
        }

        //JS에서 ...[A,B,C]을 하면 기존 Array의 요소들을 모두 꺼낸다.
        setToDos((currentArray) => [toDo, ...currentArray])
        setToDo('')
    }
    console.log(toDos)
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type={'text'}
                    placeholder={'Write your to do...'}
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
    //jsx 안에서 List가 있으면 해당 List의 내용을 차례차례 다 보여준다.
    //{[<h1 key={1}>1</h1>, <h1 key={2}>2</h1>, <h1 key={3}>3</h1>]} => h1 이 3개가 나타난다.
}

export default App
