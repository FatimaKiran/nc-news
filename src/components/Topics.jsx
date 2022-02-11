import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTopics } from '../api';

import Card from 'react-bootstrap/Card';
import Error from './Error';
import "../CSS/topics.css";

const Topics = () => 
{
    const [topics , setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error ,setError] = useState(null)

    useEffect (() => {
        getTopics().then((res) => {
               setTopics(res) 
               
        }).catch((err) => {
          setError({ err });
        });
setIsLoading(false)
   },[] );
   
   
  if (error) {
    return <Error  error={error}/>;
  }
    return isLoading ? (
      <p></p>
    ) : (


        // <div class="div">
        //   {topics.map((topic) => {
        //     return (
        //         <div className='c'>
        //       <Card className='card' key={topic.slug} >
        //          <Card.Header><h3>{topic.slug.toUpperCase()}</h3></Card.Header>
        //          <Card.Body>
        //             <Card.Text> {topic.description}  </Card.Text>
        //          </Card.Body>
        //         </Card>
  // <br />
        //         </div>
        //     );
        //   })}
       
        // </div>

        <div>
          <ul className='list'>
          {topics.map((topic)=>{
            return(
              <div>
                <li className='item' key={topic.slug}>
                <h2>{topic.slug.toUpperCase()}</h2>
                <h3>{topic.description}</h3>
                </li>
                <br />
              </div>
            )
          })}
          </ul>
        </div>
    );
}

export default Topics;