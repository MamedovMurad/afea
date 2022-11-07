
import { Navigate,  useLocation ,Outlet} from "react-router-dom";
import { getItem } from "../hooks/useCookies";



type ProtectedRouteProps = {
  
    
}
 
const ProtectedRoute:React.FC<ProtectedRouteProps> = () => {
    
    let location = useLocation();
  const token = getItem('agent') 
            if (!token) {
               
                return <Navigate to="/login" state={{ from: location }}/>
                
            }else{
                return <Outlet/> 
            }
  
}
 
 
export default ProtectedRoute;