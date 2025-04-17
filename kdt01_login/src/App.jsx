import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Subway from './components/Subway';
import TodoList from './components/TodoList';

function App() {
  return (
    <BrowserRouter>
    <div  className="w-full h-screen mx-auto flex flex-col ">
        <header className="w-full h-20 px-10 bg-gray-50 flex flex_row justify-between items-center shadow-sm">
           <h1 className='text-2xl font-extrabold text-gray-600'>P1</h1>
          {/*<div className='flex flex-row'>
            <Link to='/' className='mr-5 px-3 py-2 rounded-md hover:bg-gray-200 '>Home</Link>
            <Link to='/login' className='px-3 py-2 rounded-md hover:bg-gray-200 '>Login</Link>
          </div> */}
          < Nav />
        </header>
        <main className='w-full px-20 mt-8
                        flex flex-col flex-grow justify-start overflow-y-auto '>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/subway" element={<Subway/>}/>
            <Route path="/todo" element={<TodoList/>}/>
          </Routes>
          
        </main>
        <footer className='w-full h-20 bg-gray-400 px-10
                          flex justify-center items-center text-white'>
          footer
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
