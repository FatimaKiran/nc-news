import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCommentByArticleId, postCommentByArticleId } from "../api";
import { useContext } from "react";
import { UserContext } from "../User";
import Delete from "./Delete";
import Style from "../comment.module.css";

const Comment = () => {
  const { loggedInUser } = useContext(UserContext);
  const { article_id } = useParams();
  const [comment, setComment] = useState([]);
  const [userComment, setUserComment] = useState("");

  useEffect(() => {
    getCommentByArticleId(article_id).then((res) => {
      setComment(res);
    });
  }, [article_id, userComment, comment]);

  function submitHandler(event) {
    event.preventDefault();
    if (userComment.length) {
      postCommentByArticleId(article_id, userComment, loggedInUser.username)
        .then((res) => {
          setUserComment(res);
        })
        .then(() => {
          setUserComment("");
        });
    } else {
      alert("Please add comment");
    }
  }

  function commentHandler(event) {
    setUserComment(event.target.value);
  }
  {console.log( (comment[0].created_at.toLocaleString()),"here is comment")}

  return (
    <div className={Style.main}>
      <form>
        <label htmlFor="comments"></label>
        <br />


        <label>
          Add Your Comment: <input onChange={commentHandler} />
        </label>
        <br />
        <button onClick={submitHandler}>Add my comment</button>
      </form>
      <br />
      <ul className={Style.List}>
        {comment.map((singleComment) => {
          return (
            <div key={singleComment.comment_id}>
            
              <li className={Style.Item}>
                <h1> {singleComment.author[0].toUpperCase()}{singleComment.author.slice(1)}</h1> <br />
               {/* <small> {Number(singleComment.created_at).getFullYear()}</small> <br /><br />  */}
                {singleComment.body}
                <br /> <br />
              
                
                <div className={Style.delete}>
                  <Delete comment_id={singleComment.comment_id} />
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      {/* Add Comment Section */}
    </div>
  );
};

export default Comment;
