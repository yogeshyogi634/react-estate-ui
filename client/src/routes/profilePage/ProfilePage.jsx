import { Link, useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../libs/apiRequest";

const ProfilePage = () => {
  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={currentUser.avatar || "noavatar.webp"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
              Email: <b>{currentUser.email}</b>
            </span>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
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
