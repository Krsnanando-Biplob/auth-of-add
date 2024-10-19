import { useContext } from "react";
import { AuthContext } from "../UseProvider/Useprovider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  if(loading){
    return <div className="w-full h-[300px] flex justify-center text-center"><span className="loading loading-spinner loading-lg"></span></div>
  }
  if(user){
    return children
  }
  
  return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;

PrivetRoute.propTypes = {
  children: PropTypes.node
}