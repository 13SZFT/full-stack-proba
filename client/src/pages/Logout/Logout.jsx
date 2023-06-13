import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const kilep = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const marad = () => {
    navigate("/student");
  };

  return (
    <div>
      <p>Tényleg ki akarsz lépni?</p>
      <button onClick={kilep}>Igen</button>
      <button onClick={marad}>Nem</button>
    </div>
  );
};

export default Logout;
