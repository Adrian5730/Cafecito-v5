import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeContainer from './componentes/HomeContainer/HomeContainer'
import UserContainer from './componentes/UserContainer/UserContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user/:login_register' element={<UserContainer />}></Route>
        <Route path='/' element={<HomeContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
