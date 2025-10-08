import { Link, useNavigate, } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import {  useRef } from "react";
import axios from "axios";
import { signin } from "../../axios/ProductApi";
import Cookies from "js-cookie";

function Login() {
    const authRef = useRef(null)
    const navigator = useNavigate()
    async function onAuthFormSubmit(formDetails) {
        try {
            const response = await axios.post(signin(), {
                username: formDetails.user,
                email: formDetails.email,
                password: formDetails.password
            }); 
            Cookies.set('jwt-token', response.data.token);
            navigator('/');
        } catch (error) {
            authRef.current.resetFormData();
            console.log(error);
        }
    }

  return ( 
      <div className="login-page min-h-screen bg-gray-500">
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pt-[2rem] tracking-[.2rem]">
          Welcome to Shop Cart
        </h2>
        <div className="container px-10 w-2/3  m-auto mt-10">
          <h2 className="text-center text-2xl font-semibold mb-2">Login</h2>
          <div className="form flex items-start flex-col  gap-6 text-lg border-2 rounded-2xl p-4 bg-gray-50 ">
            <Auth onSubmit={onAuthFormSubmit} ref={authRef} />
          </div>
          <span className="signup-btn text-gray-100 text-center w-full inline-block my-4 cursor-pointer text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Don't have an account? <Link to="/signup">sign up </Link>here
          </span>
        </div>
      </div>
  );
}

export default Login;
