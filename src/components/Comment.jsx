import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getCommentByArticleId , postCommentByArticleId} from '../api';
import { useContext } from 'react';
import { UserContext } from '../User';
import Delete from './Delete';

const Comment = () => {
    const {loggedInUser} = useContext(UserContext);
    const {article_id} = useParams();
    const [comment , setComment] = useState([]);
    const [userComment, setUserComment] = useState("");

    useEffect(()=>{
        getCommentByArticleId(article_id).then((res)=>{
            setComment(res);
        })
    },[article_id, userComment, comment]);

    function submitHandler(event){
        event.preventDefault();
        if(userComment.length){
          postCommentByArticleId(article_id,userComment,loggedInUser.username).then((res)=>{
          setUserComment(res)
        }).then(()=>{
            setUserComment("")
        })}else{
            alert("Please add comment")
        }
    }
    

    function commentHandler(event){
        setUserComment(event.target.value);
    }
    return (
        <div>
          

          <form >
               <label htmlFor="comments"></label>
            <br />
          
            <label>Add Your Comment: <input onChange={commentHandler} /></label>   
            <br />
            < button onClick={(submitHandler)}>Add my comment</button> 
          </form>
<br />

              {comment.map((singleComment)=>{
                  return (<>
                    <Card style={{ width: '23em' }}>
                    <Card.Header>Author: {singleComment.author}</Card.Header>
                   <Card.Body>
                     {singleComment.body}
                   </Card.Body>
                   <Delete comment_id={singleComment.comment_id}/>
                   </Card>
                   </>
                  )
              })}

            {/* Add Comment Section */}
         
              
          
        </div>
    );
};

export default Comment;