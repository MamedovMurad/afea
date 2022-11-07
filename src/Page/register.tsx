import '../style/login.css'
import { Link } from "react-router-dom";
type LoginProps = {}
 
const Login:React.FC<LoginProps> = () => {
    return (
        <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            
            <p className="message">already registered? <Link to="/login">pass to login</Link></p>
          </form>
        </div>
      </div>
    );
}
 
 
export default Login;