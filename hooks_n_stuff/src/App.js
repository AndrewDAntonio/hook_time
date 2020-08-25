import React from 'react';
import './App.css';
import Counter from './components/Counter.js'
import Form from './components/Form.js'
import useFetch from './hooks/useFetch.js'

function App() {
  
  return  (
    <>
    <h1>Counter</h1>
    <Counter/>
    <h2>Form</h2>
    <Form/>
    </>
    
  )
};

export default App;
