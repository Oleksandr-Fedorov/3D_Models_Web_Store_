import Aside from './Aside.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Catalog from './Catalog.js';
import Forum from './Forum.js';
import ModelViewer from './ModelViewer.js';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CatalogViewer from './CatalogViewer.js';
import {Context} from './Context.js';
import { useState } from 'react';


function App() {
  const [name, setName]  = useState();
  return (
    <>
    <Context.Provider value={{name, setName}}>
      <Header/>
      <div className='container'>
        <Aside/>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Catalog' element={<Catalog/>}/>
            <Route path='/Forum' element={<Forum/>}/>
            <Route exact path='/Catalog/CatalogViewer' element={<CatalogViewer/>}/>
            <Route path='/Catalog/CatalogViewer/ModelViewer/:id' element={<ModelViewer/>}/>
          </Routes>
        </Router>
      </div>
      <Footer/>
    </Context.Provider>
    </>
  );
}

export default App;
