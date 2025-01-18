import React from 'react';
import Tabs from './Tabs';
import "./styles.css";

const Tabset = () => {
    const tabs = [
        { label: 'Tab 1', content: 'You are viewing Tab 1 Content' },
        { label: 'Tab 2', content: 'You are viewing Tab 2 Content' },
        { label: 'Tab 3', content: 'You are viewing Tab 3 Content' },
    ];
    return (
        <Tabs tabsContent={tabs} />
    );
};

export default Tabset;
