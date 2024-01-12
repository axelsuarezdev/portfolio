import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import css from "./footer.css";
// Icons

import { githubIcon, linkedinIcon, cellphoneIcon, emailIcon } from "../hooks";

// ATOMS
import { useRecoilState } from "recoil";
import { languageAtom, themeAtom } from "../hooks";

export function Footer() {
  // dotenv.config();
  // State del lenguaje
  const [language, setLanguage] = useRecoilState(languageAtom);
  // Modo oscuro/claro
  const [theme, setTheme] = useRecoilState(themeAtom);
  const getCurrentLanguage = (en, es): any => {
    if (language === "es") {
      return es;
    } else if (language === "en") {
      return en;
    }
  };
  const getCurrentTheme = (ifWhite, ifDark): any => {
    if (theme === "dark") {
      return ifDark;
    } else if (theme === "white") {
      return ifWhite;
    }
  };
  const inputStyleWhite = {
    color: "black",
    backgroundColor: "#b5b5b5",
  };
  const inputStyleBlack = {
    backgroundColor: "rgb(69 69 69)",
    color: "white",
  };

  const navigate = useNavigate();
  const currentLocation = `${window.location.origin}${window.location.pathname}`;
  console.log(currentLocation);
  const thankyouLocation = `${currentLocation}thankyou`;

  return (
    <footer
      className={css.footer}
      style={{ backgroundColor: theme === "dark" ? "#3d3d3d" : "white" }}
    >
      <form
        action="https://formsubmit.co/Julian_s_99@live.com"
        method="POST"
        className={css.form}
      >
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value={thankyouLocation}></input>
        <h1 className={css.h1} style={{ color: "rgb(0, 188, 212)" }}>
          {getCurrentLanguage("Contact me", "Contáctame")}
        </h1>
        <div className={css.inner__container}>
          <input
            style={getCurrentTheme(inputStyleWhite, inputStyleBlack)}
            className={css.input}
            type="email"
            name="email"
            id="email"
            placeholder={getCurrentLanguage("Your email", "Tu email")}
          />
          <input
            style={getCurrentTheme(inputStyleWhite, inputStyleBlack)}
            className={css.input}
            type="text"
            name="name"
            id="name"
            placeholder={getCurrentLanguage(
              "Your fullname",
              "Tu nombre completo"
            )}
            required
          ></input>
        </div>

        <textarea
          style={getCurrentTheme(inputStyleWhite, inputStyleBlack)}
          className={css.textarea}
          placeholder={getCurrentLanguage("Your message", "Tu mensaje")}
          name="message"
          id="message"
          required
        ></textarea>

        <button type="submit" className={css.button}>
          {getCurrentLanguage("Send email", "Enviar Email")}
        </button>
      </form>
      <div className={css.contact__container}>
        <a
          className={`${css.a} ${css.a__href}`}
          target="_blank"
          style={getCurrentTheme({ color: "black" }, { color: "white" })}
          href="https://www.linkedin.com/in/axel-juli%C3%A1n-su%C3%A1rez-11a03a238/"
        >
          Axel Julián Suárez
          <img className={css.contact__icon} src={linkedinIcon} />
        </a>
        <a
          className={`${css.a} ${css.a__href}`}
          target="_blank"
          style={getCurrentTheme({ color: "black" }, { color: "white" })}
          href="https://github.com/lechuza2013"
        >
          lechuza2013
          <img className={css.contact__icon} src={githubIcon} />
        </a>
        <a
          className={css.a}
          style={getCurrentTheme({ color: "black" }, { color: "white" })}
        >
          +54 2346366218
          <img className={css.contact__icon} src={cellphoneIcon} />
        </a>
        <a
          className={css.a}
          style={getCurrentTheme({ color: "black" }, { color: "white" })}
        >
          Julian_s_99@live.com
          <img className={css.contact__icon} src={emailIcon} />
        </a>
      </div>
    </footer>
  );
}
