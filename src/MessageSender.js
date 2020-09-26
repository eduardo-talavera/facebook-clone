import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

  const [input, setInput] = useState("");
  const [imageURL, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // some DB

    setInput("");
    setImageUrl("");
  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
             value={input}
             onChange={e => setInput(e.target.value)}
             className="messageSender__input"
             placeholder={"what's on your mind"}
          />
          <input
              value={imageURL}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="Image URL (Optional)" />

          <button onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{color: 'red'}} />
          <h3>Live video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{color: 'orange'}} />
          <h3>Feling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender;