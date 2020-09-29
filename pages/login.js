import { useRef, useEffect, useState } from "react";

const Login = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const submitRef = useRef(null)
  const pageRef = useRef(null);

  useEffect(()=>{
    usernameRef.current.focus()
  },[])

  const usernameKyDown = (e) =>{
      if(e.key === "Enter"){
        passwordRef.current.focus()
      }
  }

  const passwordKyDown = (e) =>{
      if(e.key === "Enter"){
        submitRef.current.focus()
      }
  }

  const submitKyDown = (e) =>{
      if(e.key === "Enter"){
        pageRef.current.style.background = 'red'
      }
  }

  return (
    <div ref={pageRef} className="login-page">
      <div className="form">
        <input ref={usernameRef} onKeyDown={usernameKyDown} placeholder="Username" />
        <input ref={passwordRef} onKeyDown={passwordKyDown} placeholder="Password" />
        <button ref={submitRef} onKeyDown={submitKyDown}>Login</button>
      </div>
    </div>
  );
};

export default Login;