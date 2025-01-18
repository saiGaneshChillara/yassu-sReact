import React, { useEffect, useState } from 'react';
import "./styles.css";

const CustomScrollIndicator = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0.0);

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setLoading(false);
                setData(data.products);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleScrollEvent = () => {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const percentage = (howMuchScrolled / height) * 100;
        setScrollPercentage(percentage);
        console.log("scrolled", percentage);
    };

    useEffect(() => {
        const url = "https://dummyjson.com/products?limit=100";
        fetchData(url);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', () => {});
        }
    }, []);

    if (loading) return <p>Loading</p>;
    return (
        <div className='custom-scroll-container'>
            <div className="top-container">
                <h1>This is Scroll Indicator</h1>
                <div className="progress">
                    <div className="current-progress" style={{ width: `${scrollPercentage}%`}}></div>
                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ? 
                        data.map(dataItem => {
                            return <p>{dataItem.title}</p>
                        })
                        : null
                }
            </div>
        </div>
    );
};

export default CustomScrollIndicator;