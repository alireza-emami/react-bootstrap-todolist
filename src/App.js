import './App.css';
import React, { useState, useEffect } from 'react';
import Textlist from './components/Textlist';
import TodolistInputs from './components/TodolistInputs';
import Button from 'react-bootstrap//Button';
function App() {
  const localValues = JSON.parse(localStorage.getItem('items') || '[]');
  const [texts, settext] = useState(localValues);
  const addtext = (title) => {
    const newtext = [...texts, { title }];
    settext(newtext);
    localStorage.setItem('items', JSON.stringify(newtext))
  }
  const clearall = () => {
    settext([]);
    localStorage.setItem('items', JSON.stringify([]))
  }
  return (
    <div className="app">
      {/* input */}
      <TodolistInputs addtext={addtext} />
      {/* itemes list */}
      <Textlist settext={settext}  texts={texts}/>
      {/* actions */}
      <Button style={{ width: '24rem' }} className='clear' onClick={clearall} variant="outline-danger">clear all</Button>
    </div>
  );
}

export default App;
