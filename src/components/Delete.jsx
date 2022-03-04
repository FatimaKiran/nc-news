import React from "react";
import { deleteCommentById } from "../api";
import { useState } from "react";

const Delete = (props) => {
  const { comment_id } = props;

  function deleteItem() {
    deleteCommentById(comment_id);
  }
  return (
    <div>
      <button onClick={deleteItem}>Delete your comment</button>
    </div>
  );
};

export default Delete;
