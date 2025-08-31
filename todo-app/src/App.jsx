import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState } from 'react'


function App() {
    // const todos = [
    //   { input: 'Hello! Add your first todo!', complete: false },
    //   { input: 'Hello! Add your first todo!', complete: false },
    //   { input: 'Hello!', complete: true },
    //   { input: 'Hello! Add your first todo!', complete: false },
    // ]


    const [todos, setTodos] = useState([
      { input: 'Hello! Add your song!', complete: false },
    ])
   const  [selectedTab, setSelectedTab] = useState('Open') 
function handleAddTodo (newTodo) {
    let newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
  }

function handleCompleteTodo (index) {

}

function handleDeleteTodo () {

}

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} 
      setSelectedTab = {setSelectedTab} todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>

  )
}

export default App
