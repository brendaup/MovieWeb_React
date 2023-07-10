import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
      <h1>Bienvenido, {user.alias}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;

