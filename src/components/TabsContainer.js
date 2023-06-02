import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ItemsList from './ItemsList'
const TabsContainer = ({ items, setItems }) => {
    return (
        <div className='tabs-container'>
            <Tabs
                defaultActiveKey="to-do"
                fill
            >
                <Tab eventKey="to-do" title="TO DO">
                    <ItemsList setItems={setItems} items={items} filter="idle" />
                </Tab>
                <Tab eventKey="done" title="Done">
                    <ItemsList setItems={setItems} items={items} filter="done" />
                </Tab>
            </Tabs>

        </div>
    )
}

export default TabsContainer;