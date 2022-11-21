import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img alt="" width="30" height="30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy81xKzdvWHqMQ0s4mzwYx6TxetMYC4igaSMJf2L-UkA&amp;s" data-xblocker="passed" className="d-inline-block align-top" />{' '}
        React Assignment
      </Navbar.Brand>
    </Container>
  </Navbar>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
