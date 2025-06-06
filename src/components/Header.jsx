import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import UserHandler from "../utils/userHandler";
import { netflixLogo } from "../utils/constants";

export const Header = () => {
  const user = useSelector(store=> store.user)
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="bg-transparent w-full absolute z-10">
      <nav className="flex justify-between bg-gradient-to-b from-black items-center p-4">
        <div className="md:w-36 w-24 ">
          <img src={netflixLogo} alt="Logo" />
        </div>
      {user && (<div className="flex items-center">
        <div>
          <img
            src={user.photoURL }
            alt="profile"
            className="w-20 rounded-full"
          />
        </div>
        <div>
          <button
            className="bg-red-500 text-white rounded-lg p-2 m-2 hover:bg-red-800 transition duration-300 cursor-pointer"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>)}
      </nav>
      <UserHandler/>
    </div>
  );
};
