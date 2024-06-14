import { useState } from "react";
import React from "react";

function CreateArea() {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    function handleChangeTitle(event){
        setTitle(event.target.value)
    }
    function handleChangeContent(event){
        setContent(event.target.value)
    }
  return (
    <div>
      <form>
        <input name="title" onChange={handleChangeTitle} placeholder="Title" value={title} />
        <textarea name="content" onChange={handleChangeContent} placeholder="Take a note..." rows="3" value={content} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
