import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
// import { useState, useEffect } from 'react';

const ItemsList = ({ items, setItems, filter }) => {
    const removeItem = (id) => {
        const index = items.findIndex(item => item.id == id);
        items.splice(index, 1);
        const newItems = [...items];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems))
    }
    const changeStatus = (id) => {
        const index = items.findIndex(item => item.id == id);
        if (items[index].status == 'idle') {
            items[index].status = 'done';
        } else {
            items[index].status = 'idle';
        }
        
        const newItems = [...items];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems))
    }
    const submitDate= new Date().toDateString();
    return (
        <ListGroup as="ul" className='list'>
            {items.filter(function (i) { return i.status == filter }).map((item, index) =>
                <ListGroup.Item
                    as="li"
                    className={"d-flex justify-content-between align-items-start "}>
                    <span>
                        <b style={{ 'text-decoration': item.status == 'done' ? 'line-through' : 'initial' }}>{item.title}</b>
                    </span>
                    <div>
                        <small>{submitDate} &nbsp;</small>
                        
                        <Form.Check inline onClick={() => changeStatus(item.id)} checked={item.status == 'done'} />
                        <CloseButton onClick={() => removeItem(item.id)} />
                    </div>
                </ListGroup.Item>)
            }
        </ListGroup >
    );
};

export default ItemsList;

