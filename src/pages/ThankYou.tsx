import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./ThankYou.css";

import { languageAtom, themeAtom } from "../hooks";
import { useRecoilState } from "recoil";

// Icons

function ThankYou() {
  const [language, setLanguage] = useRecoilState(languageAtom);
  const [theme, setTheme] = useRecoilState(themeAtom);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={css.container}>
      <h1
        className={css.h1}
        style={theme === "dark" ? { color: "white" } : { color: "black" }}
      >
        {language === "es"
          ? "¡Gracias por enviar el mensaje!"
          : "¡Thank you for sending the message!"}
      </h1>
      <h2 className={css.h2} style={{ color: "rgb(0, 188, 212)" }}>
        {language === "es"
          ? "Estaremos en contacto pronto!"
          : "We will be in touch soon!"}
      </h2>
      <button className={css.button} onClick={handleClick}>
        {language === "es" ? "Volver" : "Return"}
      </button>
    </div>
  );
}

export { ThankYou };
