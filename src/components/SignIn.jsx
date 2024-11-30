import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
  const {signinUser} = useContext(AuthContext)
  const handleSignInUser = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    signinUser(email, password)
    .then(result=> console.log(result.user))
    .catch(error=> console.log('error', error))
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-center mt-4">Login now!</h1>
        <form onSubmit={handleSignInUser} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p>
            Create Account?{" "}
            <Link to="/signup">
              <span className="text-red-600">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
