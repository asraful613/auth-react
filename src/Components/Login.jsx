import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const{signInuser,signInWithGoogle}=useContext(AuthContext)
    const navigate=useNavigate();
    const handleLogin =e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        signInuser(email,password)
        .then(result=>{
          console.log(result.user);
          e.target.reset()
          navigate('/')
        })
        .catch(error=>{
          console.error(error)
        })
    }
    const handlegoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
         console.error(error)
       })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <p>New to Auth ? please <Link className="font-bold underline" to={"/register"}>Register</Link></p>
        <p><button onClick={handlegoogleSignIn} className="btn btn-ghost">google</button></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;