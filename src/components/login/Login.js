"use client"
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { errorToast, successToast } from "../common/Toast";
import { useRouter } from "next/navigation";

const Login = () => {
const session = useSession();
const router = useRouter();
const [loginData, setLoginData] = useState({
  email: "",
  password: ""
})

const {email, password} = loginData;

const handleChange = e => {
  setLoginData((prev)=> ({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

const handleSubmit = async e => {
  e.preventDefault();
  await signIn("credentials", {
    email,
    password,
  });


    // const response = await fetch("http://localhost:5000/login", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
    // const user = await response.json();
    // console.log(user)

}

// if (session.status === "loading") {
//     return <p>loading........</p>;
//   }
  // if (session.status === "authenticated") {
  //   // console.log(session.status);
  //    successToast(
  //      "Login Successful"
  //    );
  // }

  // if (session.status === "unauthenticated") {
  //   // console.log(session.status);
  //   errorToast("Login failed.Try Again!!!");
  // }
  return (
    <>
      {/* <!-- Start User Area --> */}
      <section className="user-area ptb-100">
        <div className="container">
          <div className="user-form-content max-width-600">
            <form className="user-form" onSubmit={handleSubmit}>
              <h3>Log in to your account</h3>

              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="text" name="email" value={email} onChange={handleChange}/>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* <div className="col-12">
                  <div className="login-action">
                    <span className="log-rem">
                      <input id="remember-2" type="checkbox" />
                      <label style={{marginLeft:'0.3rem'}}>Keep me logged in</label>
                    </span>

                    <span className="forgot-login">
                      <a href="/forgot-pass.html">Forgot your password?</a>
                    </span>
                  </div>
                </div> */}

                <div className="col-12">
                  <button
                    className="default-btn"
                    style={{ border: "none", backgroundColor: "#48bdc5" }}
                    type="submit"
                  >
                    Log in
                  </button>
                </div>

                <div className="col-12">
                  <p
                    className="create"
                    style={{ fontWeight: "bolder", color: "#48bdc5" }}
                  >
                    Don’t have an account? <Link href="/registration">create</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- End User Area --> */}
    </>
  );
};

export default Login;
