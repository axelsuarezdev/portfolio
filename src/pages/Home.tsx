import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./Home.css";
import avatar from "../components/photos/medited.png";
import { languageText, languageAtom, themeAtom } from "../hooks";
import { useRecoilState } from "recoil";
import { Projects } from "../components/projects";
import { Footer } from "../components/footer";

import englishcv from "../components/cv/englishcv.pdf";
import spanishcv from "../components/cv/españolcv.pdf";
// Icons
import { githubIcon, linkedinIcon, reactIcon } from "../hooks";

function Home() {
  const [language, setLanguage] = useRecoilState(languageAtom);
  const [theme, setTheme] = useRecoilState(themeAtom);
  const textStyle = {
    color: theme === "dark" ? "#fff" : "black",
  };
  const aptitudeStyles = {
    color: theme === "dark" ? "#5a91f5" : "#0b5ff9",
  };
  return (
    <div className={css.container}>
      <div className={css.main__container}>
        <div className={css.main__container_titles}>
          <span className={css.span}>
            {languageText[language].home.greetings}
          </span>
          <h2 className={css.h2} style={textStyle}>
            {languageText[language].home.presentation}
          </h2>
          <h3 id="h3" className={css.h3} style={textStyle}>
            {languageText[language].home.whatIdo}
            <span className={css.span}> Fullstack</span>
          </h3>
          <div className={css.contact}>
            <div style={{ gap: "5px" }}>
              <a
                className={css.a}
                target="_blank"
                href="https://www.linkedin.com/in/axel-juli%C3%A1n-su%C3%A1rez-11a03a238/"
              >
                {" "}
                <img src={linkedinIcon} className={css.contactIcon} />
              </a>
              <a
                className={css.a}
                target="_blank"
                href="https://github.com/lechuza2013"
              >
                {" "}
                <img src={githubIcon} className={css.contactIcon} />
              </a>
            </div>
            <a
              className={css.cv}
              href={language === "es" ? spanishcv : englishcv}
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              {language === "es" ? "DESCARGAR CV" : "DOWNLOAD CV"}
            </a>
          </div>
        </div>
        <img src={avatar} className={css.avatar} />
      </div>

      <h1
        className={css.h1}
        style={{
          color: theme === "dark" ? "white" : "black",
          margin: "0 auto",
        }}
      >
        {language === "es" ? "Sobre mí" : "About me"}
      </h1>
      <p
        className={css.presentation}
        style={{
          color: theme === "dark" ? "white" : "black",
        }}
      >
        {languageText[language].home.career.presentationCard}
      </p>
      <h1
        className={css.h1}
        style={{
          color: theme === "dark" ? "white" : "black",
          margin: "20vh auto 10vh auto",
        }}
      >
        {language === "es" ? "Projectos" : "Projects"}
      </h1>
      <Projects />
      <Footer />
    </div>
  );
}

export { Home };
