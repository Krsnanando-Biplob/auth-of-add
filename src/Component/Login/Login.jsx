import { useContext } from "react";
import { AuthContext } from "../../UseProvider/Useprovider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { singInUser, sinINGoogle } = useContext(AuthContext)
  const navigate = useNavigate();
  const handelLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    singInUser(email, password)
      .then(result => {
        console.log(result.user)
        e.target.reset();
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
    console.log(email, password);
  }
  const handelGoogle = () => {
    sinINGoogle()
      .then(resut => {
        console.log(resut.user)

      })
      .catch(error => {
        console.log(error.code)
      })
  }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelLogin} className="card-body">
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
            <div>
              <button onClick={handelGoogle} className="btn btn-ghost"> Google </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;