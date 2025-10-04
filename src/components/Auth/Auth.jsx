function Auth() {
  return (
    <>
      <div className="name border-2 p-2  rounded w-full bg-transparent text-black">
        <input className="" type="text" placeholder="name" id="user-name" />
      </div>

      <div className="password border-2 p-2 rounded w-full bg-transparent text-black">
        <input type="text" placeholder="Password" id="user-password" />
      </div>
    </>
  );
}

export default Auth;
