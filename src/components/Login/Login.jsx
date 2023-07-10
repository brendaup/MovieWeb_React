import { useState, useContext } from "react"
import { UserContext } from "../../context/UserContext"

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
    <form onSubmit={(ev)=> ev.preventDefault()}>
      <label htmlFor="alias">Alias:</label>
      <input type="text" id="alias" value={userData.alias} onChange={handleChange}/>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={userData.email} onChange={handleChange}/>
      <label htmlFor="password" >Password:</label>
      <input type="text" id="password" value={userData.password} onChange={handleChange}/>
      <input type="submit" value="Log in" onClick={handleClick}/>
    </form>
  )
}

export default Login
