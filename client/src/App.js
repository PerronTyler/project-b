import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Main from './views/Main';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Company from './components/Company';
import OwnerCard from './components/OwnerCard';


function App() {
  
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/')
    }
  }, [location.pathname, navigate])

  return (
    <div className='App'>
      <Routes>
        <Route element={<Header />} path='/'>
          <Route element={<Main />} path='/'/>
          <Route element={<Contact />} path='/contact-us' />
          <Route element={<Gallery />} path='/gallery' />
          <Route element={<Company />} path='/company' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
