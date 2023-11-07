import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Home/Homepage';
import Contactuspage from './pages/Contactuspage/contactus';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

function App() { //jsx
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage/>} path='/'/>
          <Route element={<Contactuspage/>} path='/contact'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
  }
export default App;
