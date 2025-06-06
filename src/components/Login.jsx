import React, { useState, useRef } from "react";
import { Header } from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSigninform, setIsSigninform] = useState(true);
  const dispatch = useDispatch();
  const handelToggle = () => {
    setIsSigninform(!isSigninform);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [loginMessage, setLoginMessage] = useState("");

  const handelLogin = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (!emailValue || !passwordValue) {
      alert("Please fill in all fields");
      return;
    }
    const message = validate(emailValue, passwordValue);
    setLoginMessage(message);
    if (!message) {
      if (!isSigninform) {
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL:
                "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png",
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                setLoginMessage(error.message);
              });
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoginMessage(errorCode + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoginMessage(errorCode + errorMessage);
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="./bg-cover.jpg"
          alt="backGroundImage"
          className="md:w-full h-screen object-cover"
        />
      </div>
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 -translate-y-2/3">
        <form className="flex flex-col justify-center md:w-80 md:h-96 p-4 rounded-lg bg-black/70 w-64 h-72 ">
          <h1 className="md:text-3xl text-xl text-white font-bold p-2">
            {isSigninform ? "Sign in" : "Sign up"}
          </h1>
          {!isSigninform && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="border-2 border-gray-200 rounded-lg md:p-2 md:m-2 m-1 p-1.5  text-white text-sm h-9 md:h-10 bg-gray-500/70"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="border-2 border-gray-200 rounded-lg md:p-2 md:m-2 m-1 p-1.5  text-white text-sm h-9 md:h-10 bg-gray-500/70"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="border-2 border-gray-200 rounded-lg md:p-2 md:m-2 m-1 p-1.5  text-white text-sm h-9 md:h-10 bg-gray-500/70"
          />
          <button
            className="bg-red-500 text-white text-sm rounded-lg md:p-2 md:m-2 m-1 p-1.5 hover:bg-red-800 transition duration-300 cursor-pointer"
            onClick={handelLogin}
          >
            {isSigninform ? "Login" : "Sign Up"}
          </button>
          <p className="text-red-700 p-2">{loginMessage}</p>
          <p
            className="text-white p-2 cursor-pointer hover:text-gray-400 text-base transition duration-200"
            onClick={handelToggle}
          >
            {isSigninform ? "Don't have an account?" : "Already a user?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
