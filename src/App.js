import './App.css';
import React, { useState, useEffect } from 'react';
import ItemsList from './components/ItemsList';
import TodolistInputs from './components/TodolistInputs';
import Button from 'react-bootstrap//Button';
import Card from 'react-bootstrap/Card';

function App() {
  const localValues = JSON.parse(localStorage.getItem('items') || '[]');
  const [items, setItems] = useState(localValues);
  const addtext = (title) => {
    const newItems = [...items, { title, status: 'idle' }];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems))
  }
  const clearall = () => {
    setItems([]);
    localStorage.setItem('items', JSON.stringify([]))
  }
  return (
    <Card className="app">
      <Card.Header>Todo List</Card.Header>
      <Card.Body style={{ padding: 0 }}>
        <table>
          <tbody>
            <tr>
              <td className='header'><TodolistInputs addtext={addtext} /></td>
            </tr>
            <tr>
              <td className='main'>
                <ItemsList setItems={setItems} items={items} />
              </td>
            </tr>
            <tr>
              <td className='footer'><Button onClick={clearall} variant="outline-danger">clear all</Button> </td>
            </tr>
          </tbody>
        </table>


      </Card.Body>
    </Card >
  );
}

export default App;
