import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(true);
  const [todos,setTodos]=useState([
    {
      title:"first todo",
      desc:"this is my first todo"
    },
    {
      title:"second todo",
      desc:"this is my second todo"
    },
    {
      title:"third todo",
      desc:"this is my third todo"
    }
  ])
  const Todo=({todo})=>{
      return (<>
      <div className="m-4 border border-1 border-purple-400">

        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
      </>)
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showbtn ?<button>I am shown</button>:""} */}
      {todos.map(todo=>{
        return <Todo todo={todo} key={todo.title}/>
      })}
      {showbtn && <button>I am shown</button>}
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
