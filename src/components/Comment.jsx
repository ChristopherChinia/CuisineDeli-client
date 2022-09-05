import './comment.css';
import React,{ useState} from "react";
import UpdateComments from "./UpdateComments";
import {AiFillDelete} from "react-icons/ai";
import {RiQuillPenFill} from "react-icons/ri";

const Comment = ({ view, onDelete, onUpdateMessage }) => {
  const { id, food, feedback, author, created_at: createdAt } = view;
  const [isEditing, setIsEditing] = useState(false);
  const timestamp = new Date(createdAt).toLocaleTimeString();
  


  function deleteReview() {
    fetch(`http://localhost:4000/Books/${view.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => onDelete(view));
  }

  function handleUpdateMessage(updatedMessage) {
    setIsEditing(false);
    onUpdateMessage(updatedMessage);
  }

  return (
    <div>
     
      {isEditing ? (
      <UpdateComments 
      id={id}
      feedback={feedback}
      onUpdateMessage={handleUpdateMessage}
      />) : (<>
      <h3>{food}</h3>
      <p>{feedback}</p>
      <div className="flexInfo">
      <p><strong>- By {author}</strong></p>
      <span className="time">{timestamp}</span>
      </div>
      </>)}
      {
      <div className="button-container">
        <button className="btn-patch" onClick={() => setIsEditing((isEditing) => !isEditing)}>
          <RiQuillPenFill/>
        </button>
        <button className="delete-btn" onClick={deleteReview}>
          <AiFillDelete/>
        </button>
      </div>}
    </div>
  );
};

export default Comment;
