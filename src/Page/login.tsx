import '../style/login.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useActions } from '../hooks/useAction';
type LoginProps = {}
 
const Login:React.FC<LoginProps> = () => {
  const [form, setform] = useState({username:'',password:'', error:false})
  const {authenticateUserStart}= useActions()
  const setForm = (param:any)=>{
    setform({...form,[param.name]:param.value})
  }
  async function submit(e:any,params:{username:string, password:string}) {
    e.preventDefault()
    if (!params.password||!params.username) {
      return setform({...form, error:true})
    }
    authenticateUserStart(params)
  }
  
    return (
        <div className="login-page">
 <div className="form">
          <form className="login-form" onSubmit={(e)=>submit(e,form)}>
            <input type="text" placeholder="username" name='username' onChange={(e)=>setForm(e.target)}/>
            <input type="password" placeholder="password" name='password' onChange={(e)=>setForm(e.target)}/>
            <button>login</button>
            <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
          </form>
          </div>
        </div>
    
    );
}
 
 
export default Login;