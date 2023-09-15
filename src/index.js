import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

WebFont.load({
  google: {
    // Work+Sans:wght@400;500;700
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <App />
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
// root.render(<React.StrictMode> <Index /> </React.StrictMode> );

