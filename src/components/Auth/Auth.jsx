import { useEffect, useState } from "react";

function Auth({onSubmit,resetForm}) {
  const [formDetail, setFormDetail] = useState({
    user: "",
    email: "",
    password: "",
    isLoading:false,
  });

  useEffect(() => {
    setFormDetail({
    user: "",
    email: "",
    password: "",
    isLoading:false,
  })
  }, [resetForm])
  
  function updateUserName(updatedUserName) {
    setFormDetail({ ...formDetail, user: updatedUserName });
  }
  function updateEmail(updatedEmail) {
    setFormDetail({ ...formDetail, email: updatedEmail });
  }
  function updatePassword(updatedPassword) {
    setFormDetail({ ...formDetail, password: updatedPassword });
  }
  function handleSubmitForm(){
    setFormDetail({ ...formDetail, isLoading: true });
    onSubmit(formDetail);
  }

  return (
    <>
      <div className="name border-2 p-2  rounded w-full bg-transparent text-black">
        <input
          onChange={(e) => updateUserName(e.target.value)}
          value={formDetail.user}
          type="text"
          placeholder="name"
          id="user-name"
        />
      </div>
      <div className="name border-2 p-2  rounded w-full bg-transparent text-black">
        <input
          onChange={(e) => updateEmail(e.target.value)}
          value={formDetail.email}
          type="text"
          placeholder="email"
          id="user-email"
        />
      </div>
      <div className="password border-2 p-2 rounded w-full bg-transparent text-black">
        <input
          onChange={(e) => updatePassword(e.target.value)}
          value={formDetail.password}
          type="text"
          placeholder="Password"
          id="user-password"
        />
      </div>
      <div className="login-btn flex items-center justify-center w-full ">
         <button
          onClick={handleSubmitForm}
          type="button"
          className="bg-blue-500  px-2 rounded-lg border-2 border-black cursor-pointer  text-white"
          disabled={formDetail.isLoading}
        >
          {(formDetail.isLoading) ? <span>lodaing...</span> : <span>SignUp</span>
          }
        </button> 
      </div>
    </>
  );
}

export default Auth;
