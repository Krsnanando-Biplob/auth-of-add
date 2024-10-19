import { useContext } from "react";
import { AuthContext } from "../../UseProvider/Useprovider";
import { useNavigate } from "react-router-dom";

const SingUp = () => {

  const { createUser, sinINGoogle } = useContext(AuthContext)
  const navigate = useNavigate()

  const handelSinup = e => {

    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    console.log(email, password, name);
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handelGoogleLogin = () => {
    sinINGoogle()
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Sing up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelSinup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name="name" type="text" placeholder="your name" className="input input-bordered" required />
            </div>
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
              <button className="btn btn-primary">Sing up</button>
            </div>
            <div>
              <button onClick={handelGoogleLogin} className="btn btn-ghost"> Google </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;