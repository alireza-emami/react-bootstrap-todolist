import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import TodolistInputs from './TodolistInputs';


// const Textlist = () => {

//     return (

//     );
// }

// export default Textlist;

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Textlist = () => {
    const [texts, settext] = useState([])
    const addtext = (title) => {
        settext([...texts, { title }])
    }
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <ListGroup as="ol" numbered>


                <TodolistInputs addtext={addtext} />
                {texts.map(texts => <ListGroup.Item
                    style={{ width: '30rem' }}
                    as="li"
                    className="d-flex justify-content-center align-items-center "
                >  <label class="form-check-label" ></label> {texts.title}</ListGroup.Item>)}



            </ListGroup>
        </div>

    );
}

export default Textlist;