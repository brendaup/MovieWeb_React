import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name}!</h2>
      <div className="profile-info">
        <img src={user.avatar} alt="Profile Avatar" />
        <div className="profile-details">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;


