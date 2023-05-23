import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TodolistInputs = ({ addtext }) => {
    const [title, seTitle] = useState('')
    const handelsubmit = (e) => {
        e.preventDefault()
        addtext(title)
        seTitle('')
    }
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <Card style={{ width: '30rem'}}>
                <Card.Body >
                    <Card.Title className='title'>Card Title</Card.Title>
                    <form onSubmit={handelsubmit}>

                        <div className='form'>
                            <input className='input1' type='text' required value={title}
                                onChange={(e) => { seTitle(e.target.value) }}
                            ></input>
                            {/* <input className='input2' type='submit'></input> */}
                            <Button variant="warning" type='submit'>submit</Button>{' '}
                        </div>

                    </form>
                </Card.Body>
            </Card>
        </div>

    );
}

export default TodolistInputs;