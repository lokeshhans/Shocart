import { Link } from "react-router-dom";
import Auth from "../../components/CategoryItem/Auth/Auth";

function Login() {
  return (
    <div>
      <div className="login-page min-h-screen bg-gray-500">
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pt-[2rem] tracking-[.2rem]">
          Welcome to Shop Cart
        </h2>
        <div className="container px-10 w-2/3  m-auto mt-10">
          <h2 className="text-center text-2xl font-semibold mb-2">Login</h2>
          <div className="form flex items-start flex-col  gap-6 text-lg border-2 rounded-2xl p-4 bg-gray-50 ">
            <Auth />
            <div className="login-btn flex items-center justify-center w-full ">
              <button
                type="submit"
                className="bg-blue-500  px-2 rounded-lg border-2 border-black cursor-pointer  text-white"
              >
                login in
              </button>
            </div>
          </div>
          <span className="signup-btn text-gray-100 text-center w-full inline-block my-4 cursor-pointer text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Don't have an account? <Link to="/signup">sign up </Link>here
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
