import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import './App.css';
import Header from './components/Header/Header';
import Result from './components/Result/Result';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
