import { atom, selector } from "recoil";
// Iconos
import htmlIcon from "./components/photos/html5icon.png";
import css3Icon from "./components/photos/css3icon.png";
import typescriptIcon from "./components/photos/typescripticon.png";
import expressIconDark from "./components/photos/expressicon_black.png";
import expressIconwWite from "./components/photos/expressicon_white.png";
import firebaseIcon from "./components/photos/firebaseIcon.png";
import nodejsIcon from "./components/photos/nodejsicon.png";
import javascriptIcon from "./components/photos/javascripticon.png";
import githubIcon from "./components/photos/githubicon.png";
import mercadopagoIcon from "./components/photos/mercadopagoicon.png";
import linkedinIcon from "./components/photos/linkedinicon.png";
import reactIcon from "./components/photos/reactIcon.png";
import cellphoneIcon from "./components/photos/cellphoneIcon.png";
import emailIcon from "./components/photos/emailicon.png";
export {
  htmlIcon,
  css3Icon,
  typescriptIcon,
  expressIconDark,
  expressIconwWite,
  firebaseIcon,
  nodejsIcon,
  javascriptIcon,
  githubIcon,
  mercadopagoIcon,
  linkedinIcon,
  reactIcon,
  emailIcon,
  cellphoneIcon,
};
// Singleplayer photos
import ppt_singeplayer_menu from "./components/project-photos/ppt1_menu.PNG";
import ppt_singleplayer_play from "./components/project-photos/ppt1_play.png";
import ppt_singleplayer_play_1 from "./components/project-photos/ppt1_play-1.png";
import ppt_singleplayer_win from "./components/project-photos/ppt1-win.png";
import ppt_singleplayer_lose from "./components/project-photos/ppt1-lose.png";
import ppt_singleplayer_draw from "./components/project-photos/ppt1-draw.png";
export {
  ppt_singeplayer_menu,
  ppt_singleplayer_draw,
  ppt_singleplayer_lose,
  ppt_singleplayer_play,
  ppt_singleplayer_win,
  ppt_singleplayer_play_1,
};
// Multiplayer photos
import ppt_multiplayer_entering_room from "./components/project-photos/ppt2_entering_room.png";
// import ppt_multiplayer_menu from "./components/project-photos/ppt2_menu.PNG";
// import ppt_multiplayer_register from "./components/project-photos/ppt2_register.png";
import ppt_multiplayer_menu_2 from "./components/project-photos/ppt2_menu-2.png";
import ppt_multiplayer_waiting_room from "./components/project-photos/ppt2_waiting_room.png";
// import ppt_multiplayer_waiting_play from "./components/project-photos/ppt2_waiting_play.png";
import ppt_multiplayer_playing_1 from "./components/project-photos/ppt2_playing-1.png";
import ppt_multiplayer_playing_2 from "./components/project-photos/ppt2_playing-2.png";
import ppt_multiplayer_playing_3 from "./components/project-photos/ppt2_playing-3.png";
// import ppt_multiplayer_playing_4 from "./components/project-photos/ppt2_playing-4.png";
import ppt_multiplayer_history from "./components/project-photos/ppt2_history.png";
export {
  ppt_multiplayer_entering_room,
  ppt_multiplayer_history,
  ppt_multiplayer_menu_2,
  ppt_multiplayer_playing_1,
  ppt_multiplayer_playing_2,
  ppt_multiplayer_playing_3,
  ppt_multiplayer_waiting_room,
};
// MiniProjects & Freelance
import toDoList from "./components/project-photos/ToDoList.png";
import APIConsumption from "./components/project-photos/APIConsumption.png";
import freelance_club360 from "./components/project-photos/freelance_club360.png";
import freelance_nico from "./components/project-photos/freelance_nico.png";
import freelance_ricky from "./components/project-photos/freelance_ricky.png";
import freelance_emigrar from "./components/project-photos/freelance_emigrar.png";

export {
  toDoList,
  APIConsumption,
  freelance_club360,
  freelance_nico,
  freelance_ricky,
  freelance_emigrar,
};
export const languageText = {
  es: {
    header: {
      aboutMe: "Acerca de mí",
      mySkills: "Mis skills",
      myProjects: "Mis projectos",
    },
    home: {
      whatIdo: "Desarrollador Web",
      career: {
        presentationCard:
          "Familiarizado en el ámbito de la programación en general desde 2016 gracias a la escuela, ya hace 2 años encontré mi pasión por el Desarrollo Web, ya con 2 años de experiencia de usar herramientas Fullstack, estoy actualmente trabajando con React y Typescript, realizando y colaborando en proyectos, y estoy entusiasmado por seguir contribuyendo a estos siempre con una mirada positiva, y siempre encantado con los desafíos que expanden el horizonte de un programador y hacer cosas increíbles.",
        education: "Educación",
        aptitudes: "Conocimientos",
        experience: "Experiencia",
      },
    },
    projects: {
      freelance: {
        description:
          "A lo largo de mi trayectoria como desarrollador fullstack, he realizado proyectos freelance que enriquecieron mi experiencia. Me especialicé en la creación de páginas de inicio para negocios, portfolios para otros desarrolladores y contribuí al backend de un proyecto en curso, creando endpoints con Express, Node.js y Firebase. Además, integré MercadoPago en dicho proyecto, añadiendo una capa adicional de funcionalidad y facilitando transacciones seguras. Estas experiencias no solo me permitieron aplicar mis habilidades técnicas, sino también aprender, desafiarme y superar mis límites como programador, puliendo mis habilidades con cada proyecto.",
      },
      miniProjects: {
        titles: {
          toDoList: "To-Do List",
          apiConsumption: "Consumo de API (MercadoLibre)",
        },
        description:
          "Un par de miniprojectos al principio de mis estudios para familiarizarme con las tecnologías, siendo una un To-Do List y con un poco de mecánica frontend con HTML, CSS & JavaScript, y el otro con un agregado de backend, consumiendo la API de MercadoLibre para luego en futuros proyectos comenzar a diseñar dichas API's. ",
      },

      ppt: {
        title: "Piedra Papel o Tijeras",
        singleplayer: {
          description:
            "Recreación web del clásico juego de Piedra, papel o tijeras en una Single Page Application (SPA), aprendiendo la base de los components programandolos a mano en typescript con customElements para luego en un futuro entenderlos mejor usando React, esta primera versión del juego registra victorias, derrotas y empates de forma local gracias al uso de LocalStorage.",
        },
        multiplayer: {
          description:
            "Incorporación del backend a la versión anterior de un jugador de este proyecto, y rediseño del mismo frontend, para convertirlo en un juego multijugador, su back es principalmente una API hecha con express y conectado con firebase, con peticiones para que le dan la principal experiencia del juego al usuario, crear cuentas, iniciar sesión, crear salas de juego, unirse a las mismas salas, poder consultar las salas para poder seguir jugando anteriores partidas.",
        },
      },
    },
  },
  en: {
    header: {
      aboutMe: "About me",
      mySkills: "My skills",
      myProjects: "My projects",
    },
    home: {
      whatIdo: "Web developer",
      career: {
        presentationCard:
          "Introduced to the programming field in general since 2016, thanks to school, two years ago, I discovered my passion for Web Development. With 2 years of experience using Fullstack tools, I am currently working with React and Typescript, participating in and collaborating on projects. I am enthusiastic about continuing to contribute to these endeavors, always with a positive perspective, and consistently excited about challenges that broaden a programmer's horizons, enabling the creation of amazing things.",
        education: "Education",
        aptitudes: "Knowledge",
        experience: "Experience",
      },
    },
    projects: {
      freelance: {
        description:
          "Throughout my journey as a fullstack developer, I've taken on freelance projects that enriched my experience. I specialized in creating landing pages for businesses, portfolios for fellow developers, and contributed to the backend of an ongoing project, creating endpoints with Express, Node.js, and Firebase. Additionally, I integrated MercadoPago into this project, adding an extra layer of functionality and facilitating secure transactions. These experiences not only allowed me to apply my technical skills but also to learn, challenge myself, and push my limits as a programmer, refining my abilities with each project.",
      },
      miniProjects: {
        titles: {
          toDoList: "To-Do List",
          apiConsumption: "Consumption of MercadoLibre API",
        },
        description:
          "A couple of mini-projects at the beginning of my studies to get familiar with the technologies, one being a To-Do List with some frontend mechanics using HTML, CSS & JavaScript, and the other involving backend, consuming the MercadoLibre API, then in future projects, start designing such APIs.",
      },

      ppt: {
        title: "Rock Paper Scissors",
        singleplayer: {
          description:
            "Web recreation of the classic Rock, Paper, Scissors game in a Single Page Application (SPA), learning the basics of components by hand-coding them in TypeScript with customElements, then in the future, understanding them better using React. This initial version of the game records wins, losses, and ties locally thanks to the use of LocalStorage.",
        },
        multiplayer: {
          description:
            "Incorporation of backend to the previous single-player version of this project, and redesign of the frontend, to turn it into a multiplayer game. Its backend is primarily an API built with express and connected with Firebase, with requests that provide the main user experience of the game, such as creating accounts, logging in, creating game rooms, joining the same rooms, and being able to query the rooms to continue playing previous matches.",
        },
      },
    },
  },
};

export const languageAtom = atom({
  key: "language",
  default: "es",
});
export const themeAtom = atom({
  key: "theme",
  default: "dark",
});
