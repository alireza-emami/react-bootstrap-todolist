import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import TodolistInputs from './TodolistInputs';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
// import { useState, useEffect } from 'react';

const Textlist = () => {
    const [texts, settext] = useState([]);
    const addtext = (title) => {
        settext([...texts, { title }]);
    }
    const removeItem = (index) => {
        texts.splice(index, 1);
        settext([...texts]);
    }
    const clearall = () => {
        settext([]);
    }
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(texts))

      },[texts]);
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <ListGroup as="ol" numbered>
                <TodolistInputs addtext={addtext} />
                {texts.map((item, index) =>
                    <ListGroup.Item
                        style={{ width: '30rem' }}
                        as="li"
                        // className="d-flex justify-content-space-between align-items-center "
                        className='group1'
                    >
                        <label class="form-check-label m"  > {item.title} </label>
                        <div className='group2'>
                            <Form.Check aria-label="option 1" />
                            <CloseButton onClick={() => removeItem(index)} />
                        </div>
                    </ListGroup.Item>)}
                <Button onClick={clearall} variant="outline-danger">clear all</Button>{' '}
            </ListGroup>
        </div>
    );
};

export default Textlist;

