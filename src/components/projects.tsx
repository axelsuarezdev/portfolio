import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { useRecoilState } from "recoil";

import {
  languageText,
  languageAtom,
  themeAtom,
  freelance_nico,
  freelance_club360,
  freelance_ricky,
  freelance_emigrar,
  swpage_1,
  swpage_2,
  swpage_3,
  swpage_4,
  swpage_5,
} from "../hooks";

import css from "./projects.css";
import {
  // PPT - SingePlayer photos
  ppt_singeplayer_menu,
  ppt_singleplayer_draw,
  ppt_singleplayer_lose,
  ppt_singleplayer_play,
  ppt_singleplayer_play_1,
  ppt_singleplayer_win,
  // PPT - Multiplayer photos
  ppt_multiplayer_entering_room,
  ppt_multiplayer_history,
  ppt_multiplayer_menu_2,
  ppt_multiplayer_playing_1,
  ppt_multiplayer_playing_2,
  ppt_multiplayer_playing_3,
  ppt_multiplayer_waiting_room,
} from "../hooks";

// Icons
import {
  htmlIcon,
  css3Icon,
  typescriptIcon,
  mercadopagoIcon,
  expressIconDark,
  expressIconwWite,
  firebaseIcon,
  nodejsIcon,
  javascriptIcon,
} from "../hooks";

// React Icons
import { FaReact , FaCss3, FaHtml5, FaNodeJs  } from "react-icons/fa";
{/* <FaReact /> */}
{/* <FaCss3 /> */}
import { SiTypescript, SiVercel, SiExpress  } from "react-icons/si";
{/* <SiTypescript /> */}
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
{/* <RiTailwindCssFill /> */}
function Projects() {
  const [language, setLanguage] = useRecoilState(languageAtom);
  const [theme, setTheme] = useRecoilState(themeAtom);
  // True = SingePlayer | False = MultiPlayer
  const [projectVersion, setProjectVersion] = useState(false);
  // True = To-Do List | False = API Consumption (Mercadolibre)
  const [miniProjects, setMiniProject] = useState(true);
  //Cambiar el Mini Projecto que se va a mostrar
  const toggleMiniProject = () => {
    console.log("toggleMiniProject Executed");
    setMiniProject((previousMiniProject) =>
      previousMiniProject === true ? false : true
    );
  };
  //Cambiar la versión del projecto PPT
  const toggleProjectVersion = () => {
    console.log("toggleProjectVersion Executed");
    setProjectVersion((previousVersion) =>
      previousVersion === true ? false : true
    );
  };
  // Obtener un contenido u otro dependiendo del miniProjecto que se va a mostrar
  // const getMiniProjectContent = (toDoList, APIconsumption): any => {
  //   if (miniProjects === true) {
  //     return toDoList;
  //   } else if (miniProjects === false) {
  //     return APIconsumption;
  //   }
  // };
  // Obtener un contenido u otro dependiendo de la versión del projecto PPT
  const getCurrentProjectContent = (
    singleplayerContent,
    multiplayerContent
  ): any => {
    if (projectVersion === true) {
      return singleplayerContent;
    } else if (projectVersion === false) {
      return multiplayerContent;
    }
  };
  // Obtener un contenido u otro dependiendo del modo claro/oscuro
  const getThemeContent = (ifWhite, ifDark) => {
    if (theme === "white") {
      return ifWhite;
    } else if (theme === "dark") {
      return ifDark;
    }
  };
  const getLanguageContent = (ifSpanish, ifEnglish)=>{
    if (language === "es"){
      return(ifSpanish);
    } else if (theme === "en"){
      return ifEnglish
    }
  }
  return (
    /* Container principal con GRID
     Y cada projeto individual con flex. */
    <div className={css.container}>
      <div className={css.container__projects}>
        <section className={css.project__section}>
        <a className={css.a} 
        href="https://swpage.vercel.app/"
        target="_blank"
        rel="noopener noreferrer">
            {[
              // FOTOS DE LOS TRABAJITOS FREELANCE
              swpage_1,
              swpage_2,
              swpage_3,
              swpage_4,
              swpage_5
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                
                className={css.project__img}
                style={{ cursor: "pointer" }}
              />
            ))}
          </a>
        </section>
        <h3
          className={css.project__name}
          style={getThemeContent({ color: "black" }, { color: "white" })}
        >
          {languageText[language].projects.swpage.title}{" "}
          <span style={{ color: "#00BCD4" }}>
            {language === "es"? "Fuerza": "Force"}
          </span>
        </h3>
        <p
          className={css.project__description}
          style={getThemeContent(
            { color: "black", backgroundColor: "rgb(202 247 247)" },
            { color: "#c4f7f5", backgroundColor: "#333131" }
          )}
        >
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </p>
        <div className={css.project__tecnologies}>
          <FaReact className={css.tecnologyIcon} style={{color: "rgb(0, 188, 212)"}} title="Reactjs"/>
          <RiNextjsFill className={css.tecnologyIcon} style={getThemeContent({color: "black"},{color: "white"})} title="Nextjs"/>
          <RiTailwindCssFill className={css.tecnologyIcon} style={{color: "rgb(56, 189, 248)"}} title="Tailwindcss"/>
          <SiTypescript className={css.tecnologyIcon} style={{color: "#3178c6"}} title="TypeScript"/> 
          <FaHtml5 className={css.tecnologyIcon} style={{color: "#FF5733"}} title="HTML5"/> 
          <FaCss3 className={css.tecnologyIcon} style={{color: "#0277BD"}} title="CSS3"/>
          <SiVercel className={css.tecnologyIcon} style={getThemeContent({color: "black"},{color: "white"})} title="Vercel"/>
          <FaNodeJs className={css.tecnologyIcon} style={{color: "rgb(153 204 125)"}} title="Nodejs"/>
        </div>
      </div>
      {/* // PPT */}
      <div className={css.container__projects}>
        <section className={css.project__section}>
          <a
            className={css.a}
            href={getCurrentProjectContent(
              "https://lechuza2013.github.io/desafio-final-mod5/",
              "https://piedrapapelotijerazo.onrender.com/"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
              {/* OPTIMIZACION: Que devuelva todo */}
            {
              [
                ppt_singeplayer_menu,
                ppt_singleplayer_play,
                ppt_singleplayer_play_1,
                ppt_singleplayer_win,
                ppt_singleplayer_draw,
                ppt_singleplayer_lose,
              ].map((img, index) => (
                <img style={getCurrentProjectContent({display: "inherit"},{ display: "none"})} key={index} src={img} className={css.project__img} />
              ))
              }
              {
              [
                // REHACER LAS FOTOS DE PLAYING QUE LAS SAQUE PARA EL ORTO
                // ppt_multiplayer_menu,
                // ppt_multiplayer_register,
                ppt_multiplayer_menu_2,
                ppt_multiplayer_entering_room,
                ppt_multiplayer_waiting_room,
                // ppt_multiplayer_waiting_play,
                ppt_multiplayer_playing_1,
                ppt_multiplayer_playing_2,
                ppt_multiplayer_playing_3,
                // ppt_multiplayer_playing_4,
                ppt_multiplayer_history,
              ]
            .map((img, index) => (
              <img style={getCurrentProjectContent({display: "none"},{display: "inherit"})} key={index} src={img} className={css.project__img} />
            ))}
          </a>
        </section>
        <h3
          className={css.project__name}
          style={getThemeContent({ color: "black" }, { color: "white" })}
        >
          {languageText[language].projects.ppt.title}{" "}
          <span style={{ color: "#00BCD4" }}>
            {getCurrentProjectContent("SinglePlayer", "Multiplayer")}
          </span>
        </h3>
        <button className={css.project__version} onClick={toggleProjectVersion}>
          {getCurrentProjectContent("MULTIPLAYER", "SINGLEPLAYER")}
        </button>
        <p
          className={css.project__description}
          style={getThemeContent(
            { color: "black", backgroundColor: "rgb(202 247 247)" },
            { color: "#c4f7f5", backgroundColor: "#333131" }
          )}
        >
          {getCurrentProjectContent(
            languageText[language].projects.ppt.singleplayer.description,
            languageText[language].projects.ppt.multiplayer.description
          )}
        </p>
        <div className={css.project__tecnologies}>
          {getCurrentProjectContent(
            [htmlIcon, css3Icon, typescriptIcon],
            [
              htmlIcon,
              css3Icon,
              typescriptIcon,
              getThemeContent(expressIconDark, expressIconwWite),
              firebaseIcon,
              nodejsIcon,
            ]
          ).map((icon, index) => (
            <img key={index} src={icon} className={css.tecnologyIcon} />
          ))}
        </div>
      </div>
      {/* FREELANCE */}
      <div className={css.container__projects}>
        <section className={css.project__section}>
          <a className={css.a}>
            {[
              // FOTOS DE LOS TRABAJITOS FREELANCE
              freelance_nico,
              freelance_club360,
              freelance_emigrar,
              freelance_ricky,
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                className={css.project__img}
                style={{ cursor: "initial" }}
              />
            ))}
          </a>
        </section>

        <h3
          className={css.project__name}
          style={getThemeContent({ color: "black" }, { color: "white" })}
        >
          FREE
          <span style={{ color: "#00BCD4" }}>LANCE</span>
        </h3>
        <p
          className={css.project__description}
          style={getThemeContent(
            { color: "black", backgroundColor: "rgb(202 247 247)" },
            { color: "#c4f7f5", backgroundColor: "#333131" }
          )}
        >
          {languageText[language].projects.freelance.description}
        </p>
        <div className={css.project__tecnologies}>
          {[
            htmlIcon,
            css3Icon,
            typescriptIcon,
            getThemeContent(expressIconDark, expressIconwWite),
            firebaseIcon,
            nodejsIcon,
            mercadopagoIcon,
          ].map((icon, index) => (
            <img key={index} src={icon} className={css.tecnologyIcon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Projects };

/* 
PROJECTOS CON PESO PARA EL PORTFOLIO

Piedra papel o tijera Singleplayer/Multiplayer (2) [Mod 5 y mod 6], De TODO XD Firebase, express

Buscador de MercadoLibre (1) [Pulir], React, Consumo de API

PetFinder (TERMINAR)

Colaboración a un projecto ajeno (Estaciona Chivilcoy, Ricky (1))

(Freelance +2, club 360)



PPT - SINGLEPLAYER

Implementación del clásico juego Piedra, Papel o Tijeras en una Single Page Application (SPA), con una interfaz basada en custom elements y el manejo eficiente del estado del juego. La aplicación incluye una sencilla Inteligencia Artificial (IA) para jugar contra el usuario, permitiendo registrar victorias, derrotas y empates. El puntaje se almacena localmente mediante el uso de localStorage, ofreciendo una experiencia interactiva y marcando uno de los primeros logros en mis proyectos.
Tecnologias: 
HTML - CSS - TypeScript - Parcel


PPT - MULTIPLAYER
Transformación de un proyecto Frontend a un desarrollo Fullstack, incorporando la funcionalidad de juego en tiempo real con otro usuario. Este proyecto ampliado permitirá a los usuarios crear cuentas personalizadas, iniciar sesión de manera segura y acceder a un historial completo de partidas almacenadas. La integración de Firebase potenciará la capacidad de crear y unirse a salas de juego, brindando una experiencia interactiva y dinámica en el proceso.
Tecnologias: 
HTML - CSS - TypeScript - Parcel - Firebase - Express
*/

/* 
ACOMODAR LAS IMAGENES CON EL VIDEO DE GALERIA DE IMAGENES PARA LOS DOS PPT [LISTO]

BAJAR ICONOS CON MEJOR CALIDAD. -> GitHub & Linkedin [LISTO]

AGREGAR LINKEDIN Y DOWNLOAD RESUME DEPENDIENDO DE INGLES O ESPAÑOL

PROJECTS

1 > MiniProjects (ToDoList, Api consume (Mercadolibre))

  2 > PPT SINGLE/MULTIPLAYER 
		> AGREGAR ENLACE AL CODIGO EN GITHUB Y AL JOGUINHO
		
3 > FREELANCE
*/
