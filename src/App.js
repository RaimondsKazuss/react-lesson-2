import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'

import AllPosts from "./components/AllPosts/AllPosts";
import Form from "./components/Form/Form";
import HomePage from "./components/HomePage/HomePage";
import Nav from "./components/Nav/Nav";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: sans-serif;
    color: #112D4E;
  }

  /* a:visited  {
    color: #112D4E;
  } */
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/all-posts" element={<AllPosts/>} />
          <Route exact path="/create" element={<Form/>} />
          <Route exact path="*" element={<div>404</div>} />
        </Routes>        
      </BrowserRouter>
    </>
      
  );
}

export default App;
