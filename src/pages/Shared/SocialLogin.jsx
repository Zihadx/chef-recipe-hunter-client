import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleGoogleSignIn}
          className="px-3 py-2 border flex justify-center items-center gap-4 btn btn-ghost bg-slate-100 my-4"
        >
          <img
            className="h-8 w-8"
            src="https://i.ibb.co/Q60yPY2/5847f9cbcef1014c0b5e48c8.png"
            alt=""
          />{" "}
          Continue with google
        </button>
        <button
          //   onClick={handleGoogleSignIn}
          className="px-3 py-2 border flex justify-center items-center gap-4 btn btn-ghost bg-slate-100 mb-4"
        >
          <img
            className="h-8 w-8"
            src="https://i.ibb.co/JCwXWCr/5847f98fcef1014c0b5e48c0-1.png"
            alt=""
          />{" "}
          Continue with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;