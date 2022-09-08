import './comment.css';
import React, { useState, useEffect } from "react";
import Comment from "./Comment";

const CommentBox = ({onUpdateMessage}) => {
  const [review, displayReview] = useState([]);

  useEffect(() => {
    fetch("https://safe-reaches-42746.herokuapp.com/comments")
      .then((r) => r.json())
      .then((data) => {
        displayReview(data);
      });
  }, [review]);

  const getViews = review.map((view) => (
    <Comment key={view.id} view={view} onDelete={handleDeleteViews} onUpdateMessage={onUpdateMessage} />
  ));

  function handleDeleteViews(deletedreviews) {
    const updatedReviews = review.filter(
      (view) => view.id !== deletedreviews.id
    );
    displayReview(updatedReviews);
  }


  return (
    <div className="review-container">
      {review?.length > 0 ? getViews : <h2>No reviews found</h2>}
    </div>
  );
};

export default CommentBox;
