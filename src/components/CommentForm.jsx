import './comment.css';
import React,{ useState} from 'react'

const CommentForm = () => {
    const [author, setAuthor] = useState("");
    const [food, setFood] = useState("");
    const [feedback, setFeedback] = useState("");
  

    function handleAuthorChange(event) {
      setAuthor(event.target.value);
    }

    function HandleFoodChange(event) {
        setFood(event.target.value);
      }

      function HandleFeedbackChange(event) {
        setFeedback(event.target.value);
      }

      function HandleSubmit(e) {
        e.preventDefault();
        const sumData = {
          author: author,
          food: food,
          feedback: feedback,
        };
    
        fetch("https://safe-reaches-42746.herokuapp.com/comments",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sumData),
        });
    
        setAuthor("");
        setFood("");
        setFeedback("");
      }

  return (
    <form className="add-form" onSubmit={HandleSubmit}>

<div className="form-control">
        <label>Author</label>
        <input  placeholder="Name" required
        onChange={handleAuthorChange}
        value={author}
    />
    </div>


    <div className="form-control">
        <label>Food</label>
        <input  placeholder="Food" 
        required
        onChange={HandleFoodChange}
        value={food}
    />
    </div>

    <div className="form-control">
        <label>Feedback</label>
        <textarea
        placeholder="Write your feedback here..."
        rows={3}
        required
        onChange={HandleFeedbackChange}
        value={feedback}
      />
        </div>
    <input type='submit' value='Share feedback' className="btn-block"/>
</form>
  )
}

export default CommentForm;