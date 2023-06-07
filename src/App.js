import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
   </>
  )
}

export default App