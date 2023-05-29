import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import TodolistInputs from './TodolistInputs';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
// import { useState, useEffect } from 'react';

const Textlist = () => {
    const localValues = JSON.parse(localStorage.getItem('items') || '[]');
    const [texts, settext] = useState(localValues);
    const addtext = (title) => {
        const newtext = [...texts, { title }];
        settext(newtext);
        localStorage.setItem('items', JSON.stringify(newtext))
    }
    const removeItem = (index) => {
        texts.splice(index, 1);
        const newtext = [...texts];
        settext([...texts]);
        localStorage.setItem('items', JSON.stringify(newtext))
    }
    const clearall = () => {
        settext([]);
        localStorage.setItem('items', JSON.stringify([]))
    }
    return (
        <div className='d-flex justify-content-center  ' >
            <ListGroup as="ol" numbered     >
                <TodolistInputs addtext={addtext} />
                {texts.map((item, index) =>
                    <ListGroup.Item
                        style={{ width: '24rem' }}
                        as="li"
                        className='group1 '

                    >
                        <label class="form-check-label m"  > {item.title} </label>
                        <div className='group2'>
                            <CloseButton onClick={() => removeItem(index)} />
                        </div>
                    </ListGroup.Item>)}
                <Button style={{ width: '24rem' }} className='clear' onClick={clearall} variant="outline-danger">clear all</Button>
            </ListGroup>

        </div>
    );
};

export default Textlist;

