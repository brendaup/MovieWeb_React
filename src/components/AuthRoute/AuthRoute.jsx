import { Navigate } from "react-router-dom";
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

function AuthRoute({component}) {

    const context = useContext(UserContext);

    if (context.user) return component;
    if (!context.user) return <Navigate to="/Login" />

}
export default AuthRoute