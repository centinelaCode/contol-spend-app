import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,  
} from 'react-router-dom'
import WebFont from 'webfontloader'
import {Helmet} from 'react-helmet'


import './index.css';
import favicon from './images/logo.png'
import App from './App';
import { 
  Login,
  Register,
  SpensesList,
  SpensesByCategory,
  EditSpense, 
} from './components'
import { 
  Container
} from './elements'


WebFont.load({
  google: {
    // Work+Sans:wght@400;500;700
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      
      <BrowserRouter>      
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<Register />} />
            <Route path="/categories" element={<SpensesByCategory />} />
            <Route path="/list" element={<SpensesList />} />
            <Route path="/edit/:id" element={<EditSpense />} />
            <Route path="/" element={<App />} />
          </Routes>
        </Container>    
      </BrowserRouter>
    </>
    
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
// root.render(<React.StrictMode> <Index /> </React.StrictMode> );

