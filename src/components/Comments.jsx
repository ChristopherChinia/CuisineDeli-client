import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentBox from "./CommentBox";

const Comments = () => {
  const [showReview, setShowReview] = useState();

  const setNewPoem = () => {
    console.log("default");
  };

  function switchTable() {
    setShowReview((showReview) => !showReview);
  }
  return (
    <div className="review">
      <div className="sidebar">
        <button className="btn" onClick={switchTable}>
          {showReview ? "Hide" : "Show"} feedback form
        </button>

        {showReview ? <CommentForm setNewPoem={setNewPoem} /> : null}
      </div>
      <CommentBox setNewPoem={setNewPoem} />
    </div>
  );
};

export default Comments;

