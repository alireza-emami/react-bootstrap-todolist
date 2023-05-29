import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
        <div className='d-flex justify-content-center align-items-center' >
            <Card style={{ width: '24rem' }}>
                <Card.Body >
                    <Card.Header className='title'>Todolist</Card.Header>
                    <form onSubmit={handelsubmit}>
                        <div className='form'>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                    required value={title}
                                    onChange={(e) => { seTitle(e.target.value) }}
                                    placeholder='Enter your new todo'
                                />
                                <Button variant="outline-secondary" type='submit' id="button-addon1">
                                    submit
                                </Button>
                            </InputGroup>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TodolistInputs;