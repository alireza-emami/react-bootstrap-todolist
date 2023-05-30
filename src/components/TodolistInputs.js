import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const TodolistInputs = ({ addtext }) => {
    const [title, seTitle] = useState('');
    const handelsubmit = (e) => {
        e.preventDefault();
        addtext(title);
        seTitle('');
    }
    return (
        <form onSubmit={handelsubmit}>
            <InputGroup>
                <Form.Control
                    required value={title}
                    onChange={(e) => { seTitle(e.target.value) }}
                    placeholder='Enter your new todo'
                />
                <Button variant="outline-secondary" type='submit' id="button-addon1">
                    Add
                </Button>
            </InputGroup>
        </form>
    );
};

export default TodolistInputs;