import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header, Main, Contact, Gallery, Company, galleryData } from './components/appBarrel.js'


function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  let kitchenData = []
  let deckData = []
  let bathData = []
  let remodelData = []

  useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const result = galleryData
            setPosts(result)
            setLoading(false)
        }
        fetchPosts();
    }, [])

  const intializeKitchensData = (galleryData) => {
    for (let index in galleryData) {
        if (galleryData[index].category == "Kitchens") {
            kitchenData.push(galleryData[index])
        }
    }
  }
  intializeKitchensData(galleryData)

  const intializeDecksData = (galleryData) => {
      for (let index in galleryData) {
          if (galleryData[index].category == "Decks") {
              deckData.push(galleryData[index])
          }
      }
  }
  intializeDecksData(galleryData)

  const intializeBathsData = (galleryData) => {
      for (let index in galleryData) {
          if (galleryData[index].category == "Baths") {
              bathData.push(galleryData[index])
          }
      }
  }
  intializeBathsData(galleryData)

  const intializeRemodelsData = (galleryData) => {
      for (let index in galleryData) {
          if (galleryData[index].category == "Remodels") {
              remodelData.push(galleryData[index])
          }
      }
  }
  intializeRemodelsData(galleryData)
  
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
          <Route element={<Main setPosts={setPosts} kitchenData={kitchenData} bathData={bathData} deckData={deckData} remodelData={remodelData} setCurrentPage={setCurrentPage} />} path='/'/>
          <Route element={<Contact />} path='/contact-us' />
          <Route element={<Gallery setPosts={setPosts} kitchenData={kitchenData} bathData={bathData} deckData={deckData} remodelData={remodelData} setCurrentPage={setCurrentPage} posts={posts} loading={loading} currentPage={currentPage} postsPerPage={postsPerPage}/>} path='/gallery' />
          <Route element={<Company />} path='/company' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
