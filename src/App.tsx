import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./features/Router/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";

function App() {
  return (
      <BrowserRouter >
          <div className="App">
              <Navbar/>
              <Menu/>
              <AppRouter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
