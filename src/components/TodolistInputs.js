import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const TodolistInputs = ({ addtext }) => {
    const [title, setTitle] = useState('');
    const handelsubmit = (e) => {
        e.preventDefault();
        addtext(title);
        setTitle('');
    }
    return (
        <form onSubmit={handelsubmit}>
            <InputGroup>
                <Form.Control
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    placeholder='Enter your new todo'
                />
                <Button variant="outline-secondary" type='submit'>
                    Add
                </Button>
            </InputGroup>
        </form>
    );
};


export default TodolistInputs;