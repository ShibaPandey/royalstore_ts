import { Navigate, Outlet } from "react-router-dom"


const AuthLauout = ({user}:{user:boolean}) => {
  return (
 <>
 {user?<Outlet/>:<Navigate to="/login"/>}
 
 </>
  )
}

export default AuthLauout