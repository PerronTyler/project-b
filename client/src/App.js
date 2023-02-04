import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Main from './views/Main';


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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
