import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [totalUrls, setTotalUrls] = useState(0);
    const [urlsCreatedToday, setUrlsCreatedToday] = useState(0);
    const [urlsCreatedThisMonth, setUrlsCreatedThisMonth] = useState(0);

    useEffect(() => {
        // Fetch data for dashboard statistics
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Make API calls to fetch dashboard data
            const response = await axios.get('/api/dashboard');
            const data = response.data;

            // Update state with fetched data
            setTotalUrls(data.totalUrls);
            setUrlsCreatedToday(data.urlsCreatedToday);
            setUrlsCreatedThisMonth(data.urlsCreatedThisMonth);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="stats">
                <div className="stat">
                    <h3>Total URLs</h3>
                    <p>{totalUrls}</p>
                </div>
                <div className="stat">
                    <h3>URLs Created Today</h3>
                    <p>{urlsCreatedToday}</p>
                </div>
                <div className="stat">
                    <h3>URLs Created This Month</h3>
                    <p>{urlsCreatedThisMonth}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
