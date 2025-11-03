import { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*qekn97*_ga*MTIzODM5NTk0OS4xNzYyMTYwMTg1*_ga_8JE65Q40S6*czE3NjIxNjAxODQkbzEkZzEkdDE3NjIxNjA1MzYkajU3JGwwJGgw"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*qekn97*_ga*MTIzODM5NTk0OS4xNzYyMTYwMTg1*_ga_8JE65Q40S6*czE3NjIxNjAxODQkbzEkZzEkdDE3NjIxNjA1MzYkajU3JGwwJGgw"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*qekn97*_ga*MTIzODM5NTk0OS4xNzYyMTYwMTg1*_ga_8JE65Q40S6*czE3NjIxNjAxODQkbzEkZzEkdDE3NjIxNjA1MzYkajU3JGwwJGgw"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*qekn97*_ga*MTIzODM5NTk0OS4xNzYyMTYwMTg1*_ga_8JE65Q40S6*czE3NjIxNjAxODQkbzEkZzEkdDE3NjIxNjA1MzYkajU3JGwwJGgw"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*qekn97*_ga*MTIzODM5NTk0OS4xNzYyMTYwMTg1*_ga_8JE65Q40S6*czE3NjIxNjAxODQkbzEkZzEkdDE3NjIxNjA1MzYkajU3JGwwJGgw"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*qekn97*_ga*MTIzODM5NTk0OS4xNzYyMTYwMTg1*_ga_8JE65Q40S6*czE3NjIxNjAxODQkbzEkZzEkdDE3NjIxNjA1MzYkajU3JGwwJGgw"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*qekn97*_ga*MTIzODM5NTk0OS4xNzYyMTYwMTg1*_ga_8JE65Q40S6*czE3NjIxNjAxODQkbzEkZzEkdDE3NjIxNjA1MzYkajU3JGwwJGgw"
                alt=""
              />
              John Doe
            </div>
            <div className="close" onClick={() => setChat(null)}>
              X
            </div>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
