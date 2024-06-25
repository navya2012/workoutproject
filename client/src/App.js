import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
