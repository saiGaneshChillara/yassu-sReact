import React, { useState } from 'react';

const Tabs = ({ tabsContent }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const handleClick = (index) => {
        setCurrentTab(index);
    };
    return (
        <div className='tabs-wrapper'>
            <div className="tabs-header">
                {
                    tabsContent.map((tabItem, index) => {
                        return (
                            <div 
                                className={`tab-item ${currentTab === index ? 'active' : ""}`}
                                onClick={() => handleClick(index)}
                                key={tabItem.label}
                            >
                                <span className="label">
                                    {tabItem.label}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="content" style={{ color: "red" }}>
                {
                    tabsContent[currentTab] && 
                        tabsContent[currentTab].content
                }
            </div>
        </div>
    );
};

export default Tabs;
