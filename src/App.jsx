import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import characters from './data/data.json';
import './App.css';

function App() {
  const [query, setQuery] = useState("");

  const filteredCharacters = characters.characters.filter((character) =>
    character.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <>
      <BrowserRouter>
        <NavBar setQuery={setQuery} />
        <Routes>
          <Route path='/' element={<Home characters={filteredCharacters} />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

