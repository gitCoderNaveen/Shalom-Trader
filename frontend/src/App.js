import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar';
import Services from './components/Services';
import Login from './components/Login';
import Admin from './components/Admin';
import RentalPage from './components/RentalPage';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/rental' element={<RentalPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
