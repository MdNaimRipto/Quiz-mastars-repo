import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from "../Topic/Topic"

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className='flex flex-col md:flex-row mx-5 gap-5 mt-10'>
            {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;