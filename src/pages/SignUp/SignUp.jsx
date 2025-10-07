import { Link } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import axios from "axios";
import { signup } from "../../axios/ProductApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigator = useNavigate();
  const [resetSignupForm, setResetSignupForm] = useState(false)

async  function onAuthForm (authArguments){
    try {
                await axios.post(signup(), {
                username: authArguments.user,
                password: authArguments.password,
                email: authArguments.email,
              });
              navigator('/signin')
               } catch (error) {
                console.log("Error during signup:", error);
                setResetSignupForm(true)
               }
  }
  
  return (
    <div className="login-page min-h-screen bg-gray-500">
      <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pt-[2rem] tracking-[.2rem]">
        Welcome to Shop Cart
      </h2>
      <div className="container px-10 w-2/3  m-auto mt-10">
        <h2 className="text-center text-2xl font-semibold mb-2">SignUp</h2>
        <div className="form flex items-start flex-col  gap-6 text-lg border-2 rounded-2xl p-4 bg-gray-50 ">
          <Auth
            onSubmit={ onAuthForm}
            resetForm={resetSignupForm}
          />
        </div>
        <span className="signup-btn text-gray-100 text-center w-full inline-block my-4 cursor-pointer text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">
          If you have an account? <Link to="/signin">Login </Link>here
        </span>
      </div>
    </div>
  );
}

export default SignUp;
