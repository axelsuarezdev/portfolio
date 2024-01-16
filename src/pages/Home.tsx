import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./Home.css";
import avatar from "../components/photos/medited.jpg";
import { languageText, languageAtom, themeAtom } from "../hooks";
import { useRecoilState } from "recoil";
import { Projects } from "../components/projects";
import { Footer } from "../components/footer";

// Icons
import { githubIcon, linkedinIcon, reactIcon } from "../hooks";

function Home() {
  const [language, setLanguage] = useRecoilState(languageAtom);
  const [theme, setTheme] = useRecoilState(themeAtom);
  const textStyle = {
    color: theme === "dark" ? "#fff" : "black",
  };
  const handleDownloadCV = () => {
    const cvUrl =
      language === "es"
        ? "../components/cv/españolcv.pdf"
        : "../components/cv/englishcv.pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <div className={css.container}>
      <div className={css.main__container}>
        <img src={avatar} className={css.avatar} />
        <div className={css.main__container_titles}>
          <h2 className={css.h2} style={textStyle}>
            AXEL JULIÁN SUÁREZ
          </h2>
          <h3 id="h3" className={css.h3} style={textStyle}>
            {languageText[language].home.whatIdo}
            <span className={css.span}> Fullstack</span>
          </h3>
          <div className={css.contact}>
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
            <button className={css.Btn} onClick={handleDownloadCV}>
              <svg
                className={css.svgIcon}
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className={css.icon2}></span>
              <span className={css.tooltip}>
                {language === "es" ? "Descargar CV" : "Download CV"}
              </span>
            </button>
            {/* <a
            className={css.cv}
            href={
              language === "es"
                ? "../../dist/pdfs/españolcv.pdf"
                : "../../dist/pdfs/englishcv.pdf"
            }
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            {language === "es" ? "Descargar CV" : "Download CV"}
          </a> */}
          </div>
        </div>
      </div>

      {/* <h1
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
      </p> */}
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
