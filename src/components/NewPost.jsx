import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBbody, setBody] = useState("");
  const [enteredAuthor, setAuthor] = useState("");

  function changeBodyHandler(event) {
    setBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBbody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
