import { useState, useContext } from "react"
import { UserContext } from "../../context/UserContext"
import "./Login.css"

const initial_state = {
  alias: "",
  email: "",
  password: "",
}

const Login = ({loginUser}) => {

/*   const {loginUser} = useContext(UserContext); */

  const [userData, setUserData] = useState(initial_state);

  const handleChange = (ev) =>{
    setUserData({...userData, [ev.target.id]: ev.target.value})
  }

  const handleClick = ()=>{
    loginUser(userData)
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Log in to Your Account</h2>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <div className="form-group">
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Log in" onClick={handleClick} />
        </form>
      </div>
    </div>
  );
};

export default Login;
