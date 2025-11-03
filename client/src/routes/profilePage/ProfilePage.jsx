import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*qekn97*_ga*MTIzODM5NTk0OS4xNzYyMTYwMTg1*_ga_8JE65Q40S6*czE3NjIxNjAxODQkbzEkZzEkdDE3NjIxNjA1MzYkajU3JGwwJGgw"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
              Email: <b>Johndoe@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
