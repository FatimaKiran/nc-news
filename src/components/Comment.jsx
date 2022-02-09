import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getCommentByArticleId } from '../api';

const Comment = () => {
    const {article_id} = useParams();
    const [comment , setComment] = useState([]);

    useEffect(()=>{
        getCommentByArticleId(article_id).then((res)=>{
            setComment(res);
        })
    },[article_id])
    return (
        <div>
          <ul>
              {comment.map((singleComment)=>{
                  return (
                      <li  key={singleComment.comment_id}>{singleComment.body}</li>
                  )
              })}
              <p>helo</p>
          </ul>
        </div>
    );
};

export default Comment;