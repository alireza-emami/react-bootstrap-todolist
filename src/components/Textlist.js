import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
// import { useState, useEffect } from 'react';

const Textlist = ({texts, settext}) => {
    const removeItem = (index) => {
        texts.splice(index, 1);
        const newtext = [...texts];
        settext([...texts]);
        localStorage.setItem('items', JSON.stringify(newtext))
    }
    return (
        <ListGroup as="ol" numbered     >
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
        </ListGroup>
    );
};

export default Textlist;

