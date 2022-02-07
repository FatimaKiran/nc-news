import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTopics } from '../api';
import Header from './Header';


const Topics = () => {
    const [topics , setTopics] = useState([]);

    useEffect (() => {
        getTopics().then((res) => {
               setTopics(res) 
               
        })

   },[] );
   
    return (
        <div>
            <Header />
          <ul className='TopicsList'>
          {topics.map((topic) => {
            return (
                <>
                <li key={topic.slug}> {topic.slug}
                <br></br>
                {topic.description}</li>
                </>
            );
          })}
        </ul>
        </div>
    );
};

export default Topics;