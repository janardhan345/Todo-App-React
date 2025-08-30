import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
    const todos = [
      { input: 'Hello! Add your first todo!', complete: true },
      { input: 'Hello! Add your first todo!', complete: false },
      { input: 'Hello! Add your first todo!', complete: false },
      { input: 'Hello! Add your first todo!', complete: true },
    ]




  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput />
    </>

  )
}

export default App
