import './App.css';
import React, { useState } from 'react';
import TodolistInputs from './components/TodolistInputs';
import Button from 'react-bootstrap//Button';
import Card from 'react-bootstrap/Card';
import TabsContainer from './components/TabsContainer'
function App() {
  const localValues = JSON.parse(localStorage.getItem('items') || '[]');
  const [items, setItems] = useState(localValues);
  const addtext = (title) => {
    const newItems = [...items, { title, status: 'idle', id: Date.now() , submitDate : new Date().toDateString() }];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems))
  }
  const clearAll = () => {
    setItems([]);
    localStorage.setItem('items', JSON.stringify([]))
  }
  return (
    <Card className="app">
      <Card.Header>Todo List</Card.Header>
      <Card.Body style={{ padding: 0 }}>
        <table className='layout-table'>
          <tbody>
            <tr>
              <td className='header'>
                <TodolistInputs addtext={addtext} />
              </td>
            </tr>
            <tr>
              <td className='main'>
                <TabsContainer items={items} setItems={setItems} />
              </td>
            </tr>
            <tr>
              <td className='footer'><Button onClick={clearAll} variant="outline-danger">clear all</Button> </td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card >
  );
}

export default App;
