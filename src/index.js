import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'

import Container from './elements/Container'


WebFont.load({
  google: {
    // Work+Sans:wght@400;500;700
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <Container>
      <App />
    </Container>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
// root.render(<React.StrictMode> <Index /> </React.StrictMode> );

