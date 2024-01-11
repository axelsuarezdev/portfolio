import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import css from "./header.css";
// IMAGES
import moon from "./photos/moon.png";
import sun from "./photos/sun.png";

// ATOMS
import { useRecoilState, useRecoilValue } from "recoil";
import { languageText, languageAtom, themeAtom } from "../hooks";

export function Header() {
  // State del lenguaje
  const [language, setLanguage] = useRecoilState(languageAtom);
  // Bandera representante del idioma
  const [flagImageUrl, setFlagImageUrl] = useState("");
  // Modo oscuro/claro
  const [theme, setTheme] = useRecoilState(themeAtom);
  // Luna/Sol
  const [darkWhiteIconUrl, setDarkWhiteIconUrl] = useState("");
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };
  const toggleDarkOrWhite = () => {
    console.log("Valor del theme: ", theme);
    setTheme((prevTheme) => (prevTheme === "dark" ? "white" : "dark"));
  };

  useEffect(() => {
    console.log(theme, "useEffect");
    // Cargar la URL del ícono después de cambiar el tema
    if (theme === "dark") {
      setDarkWhiteIconUrl(sun);
    } else if (theme === "white") {
      setDarkWhiteIconUrl(moon);
    }
  }, [theme]);

  return (
    <header
      className={css.header}
      // style={{ backgroundColor: theme === "dark" ? "#3d3d3d" : "#C4F3FB" }}
    >
      <span className={css.languageButton} onClick={toggleLanguage}>
        {language === "es" ? "English" : "Español"}
        {/* <img src={flagImageUrl} className={css.imgFlag} /> */}
      </span>
      <img
        src={darkWhiteIconUrl}
        className={css.darkAndWhite}
        onClick={toggleDarkOrWhite}
      />
    </header>
  );
}
