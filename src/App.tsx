import React from 'react';
import './App.css';
import TrendingComponet from './components/pages/Trending';
import HeaderComponet from './components/Header';
import FooterComponet from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesComponet from './components/pages/Movies';
import SeriesComponet from './components/pages/Series';
import SearchComponet from './components/pages/Search';
import { Container } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <HeaderComponet/>
      <div className="app">
        <Container>
            <Routes>
              <Route path='/' element={<TrendingComponet />}/>
              <Route path='/movies' element={<MoviesComponet />}/>
              <Route path='/series' element={<SeriesComponet />}/>
              <Route path='/search' element={<SearchComponet />}/>
            </Routes>
          </Container>
      </div>
        <FooterComponet />
    </BrowserRouter>
  );
}

export default App;
