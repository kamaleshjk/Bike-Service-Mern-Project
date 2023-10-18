
import Home from './Home';
import Login from './Login';
import Register from './Register';
import FirstStep from './FirstStep';
import States from './States';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path='/firststep' element={<FirstStep/>}/>
          <Route path='/states' element={<States/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
