import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getCommentByArticleId , postCommentByArticleId} from '../api';

const Comment = () => {
    const {article_id} = useParams();
    const [comment , setComment] = useState([]);
    const [name,setName] = useState("jess");
    const [userComment, setUserComment] = useState("");

    useEffect(()=>{
        getCommentByArticleId(article_id).then((res)=>{
            setComment(res);
        })
    },[article_id]);

    function submitHandler(event){
        event.preventDefault();
        postCommentByArticleId(article_id,userComment,name)
    }

    function nameHandler(event){
        setName(event.target.value);
    }

    function commentHandler(event){
        console.log(event.target.value, "CommentHandler");
        setUserComment(event.target.value);
    }

    return (
        <div>
          

          <form >
               <label htmlFor="comments">Add Your Comment:</label>
            <label>Add Your Name: <input onChange={nameHandler} /></label>  
            <br />
            <label>Add Your Comment: <input onChange={commentHandler} /></label>   
            <br />
            < button onClick={(submitHandler)}>Add my comment</button> 
          </form>


              {comment.map((singleComment)=>{
                  return (<>
                    <Card style={{ width: '23em' }}>
                    <Card.Header>Id: {singleComment.comment_id}</Card.Header>
                   <Card.Body>
                     {singleComment.body}
                   </Card.Body>
                   </Card>
                   </>
                  )
              })}

            {/* Add Comment Section */}
         
              
          
        </div>
    );
};

export default Comment;