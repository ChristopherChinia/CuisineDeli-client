import './comment.css';
import React,{ useState} from 'react'

const CommentForm = () => {
    const [author, setAuthor] = useState("");
    const [meal, setMeal] = useState("");
    const [feedback, setFeedback] = useState("");
  

    function handleAuthorChange(event) {
      setAuthor(event.target.value);
    }

    function HandleMealChange(event) {
        setMeal(event.target.value);
      }

      function HandleFeedbackChange(event) {
        setFeedback(event.target.value);
      }

      function HandleSubmit(e) {
        e.preventDefault();
        const sumData = {
          author: author,
          meal: meal,
          feedback: feedback,
        };
    
        fetch("http://localhost:4000/Books",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sumData),
        });
    
        setAuthor("");
        setMeal("");
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
        <label>Meal</label>
        <input  placeholder="Meal" required
        onChange={HandleMealChange}
        value={meal}
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