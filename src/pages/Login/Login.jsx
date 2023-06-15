import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate,} from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      signIn(data.email, data.password).then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      });
    };
    return (
      <>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <small className="text-red-600 mt-2">Email is required</small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type='password'
                    name="password"
                    {...register("password", { required: true })}
                    placeholder="password"
                    className="input input-bordered"
                  />
            
                  {errors.password && (
                    <small className="text-red-600 mt-2">
                      Password is required
                    </small>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-ghost bg-orange-500 text-white hover:text-slate-900"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center mb-6 mt-4">
                <small>
                  New to here?
                  <Link to="/register" className="link link-primary">
                    Sign up
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;