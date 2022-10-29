import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    useTitle('home')
    return (
        <div>
            <h3>Home's Total news : {allNews.length}</h3>
            {
                allNews.map(news => <NewsSummaryCard keys={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;