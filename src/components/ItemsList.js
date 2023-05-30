import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
// import { useState, useEffect } from 'react';

const ItemsList = ({ items, setItems }) => {
    const removeItem = (index) => {
        items.splice(index, 1);
        const newItems = [...items];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems))
    }
    const changeStatus = (index) => {
        if (items[index].status == 'idle') {
            items[index].status = 'done';
        } else {
            items[index].status = 'idle';
        }
        const newItems = [...items];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems))
    }
    return (
        <ListGroup as="ul" className='list'    >
            {items.map((item, index) =>
                <ListGroup.Item
                    as="li"
                    className={"d-flex justify-content-between align-items-start " + item.status}>
                    <span>
                        {index + 1}.<span style={{ 'text-decoration': item.status == 'done' ? 'line-through' : 'initial' }}>{item.title}</span>
                    </span>
                    <div>
                        <Form.Check inline onClick={() => changeStatus(index)} checked={item.status == 'done'} />
                        <CloseButton onClick={() => removeItem(index)} />
                    </div>
                </ListGroup.Item>)
            }
        </ListGroup >
    );
};

export default ItemsList;

