import React, {  } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { calcAndHumanizeDurationFromNow } from '../lib/date';


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
                        <small>{calcAndHumanizeDurationFromNow(item.submitDate)} &nbsp;</small>

                        <Form.Check inline onClick={() => changeStatus(item.id)} checked={item.status == 'done'} />
                        <CloseButton onClick={() => removeItem(item.id)} />
                    </div>
                </ListGroup.Item>)
            }
        </ListGroup >
    );
};

export default ItemsList;

