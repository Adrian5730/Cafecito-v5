import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginContainer from './componentes/LoginContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<LoginContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
