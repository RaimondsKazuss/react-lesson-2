import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import './App.css';
import AllPosts from './components/AllPosts/AllPosts';
import Categories from './components/Categories/Categories';
import Form from './components/Form/Form';
import HomePage from './components/HomePage/HomePage';
import Nav from './components/Nav/Nav';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: sans-serif;
    color: #112D4E;
  }
`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/all-posts" element={<AllPosts/>} />
          <Route path="/categories/:categoryName" element={<Categories/>} />
          <Route path="/create" element={<Form/>} />
          <Route path="*" element={<div>404</div>} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
