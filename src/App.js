import React from 'react';
//External librairy
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
//style
import './App.css';
//components
import Logo from './components/logo';
import Navbar from './components/navbar';
import List from './components/list';
import Ajout from './components/ajout';
import Ajout2 from './components/ajout2';
import Logo1 from "./components/reactogo.png";
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Navbar />
          <img src={Logo1} alt="reactogo" />
          <Routes>
            {<Route path="logo" element={<Logo />} />}
            <Route path="/list" element={<List />} />
            <Route path="ajout" element={<Ajout />} />
            <Route path="ajout2" element={<Ajout2 />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;



