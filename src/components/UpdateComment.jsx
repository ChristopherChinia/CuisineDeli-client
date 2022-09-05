import './comment.css';
import React, { useState } from "react";

function UpdateComments({ id, feedback, onUpdateMessage }) {
  const [messageBody, setMessageBody] = useState(feedback);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:4000/Books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feedback: messageBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedMessage) => onUpdateMessage(updatedMessage));
  }

  return (
       <form className="add-form" onSubmit={handleFormSubmit}>
<div className="form-control">
        <textarea
        placeholder="Make changes"
        rows={10}
        onChange={(e) =>setMessageBody(e.target.value)}
        value={messageBody}
      />
        </div>
    <input type='submit' value='Update' className="btn-block"/>
    </form>
  );
}

export default UpdateComments;
