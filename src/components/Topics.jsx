import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTopics } from '../api';
import Header from './Header';
import Card from 'react-bootstrap/Card';

const Topics = () => {
    const [topics , setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        getTopics().then((res) => {
               setTopics(res) 
               
        })
setIsLoading(false)
   },[] );
   
    return isLoading ? (
      <p>...isLoading</p>
    ) : (


        <div>
            <Header />


            

          <ul className='TopicsList'>
           
          {topics.map((topic) => {
            return (
                <>
               <Card border="primary"  style={{ width: '20rem' }}>
    <Card.Header>{topic.slug}</Card.Header>
    <Card.Body>
      
      <Card.Text>
        {topic.description}
      </Card.Text>
    </Card.Body>
  </Card>
  <br></br>
                </>
            );
          })}
        </ul>
        </div>
    );
};

export default Topics;