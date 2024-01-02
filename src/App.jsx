import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
    <div className='w-full h-screen bg-zinc-500 flex items-center justify-start p-8 flex-col'>

     <AddTodo/>
      <Todos/>
    </div>
    </>
  
  )
}

export default App