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
      greetings: "Hola,",
      presentation: "Soy Axel",
      whatIdo: "Soy un Desarrollador Web",
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
          "Cuando me adentré en el mundo del desarrollo web fullstack, comencé con miniproyectos para familiarizarme con las tecnologías. Uno de ellos se centra en el consumo de datos de la API de MercadoLibre, explorando y aplicando técnicas de consumo de API para obtener información en tiempo real sobre productos en MercadoLibre.  En contraste, otro de mis primeros proyectos en este viaje fue una aplicación de lista de tareas (To-Do List), diseñada de manera simple pero funcional. El objetivo principal de este proyecto era aplicar y reforzar los conceptos básicos de HTML, CSS y Javascript, proporcionando una experiencia práctica y tangible en el aprendizaje de estos fundamentos. ",
      },

      ppt: {
        title: "Piedra Papel o Tijeras",
        singleplayer: {
          description:
            "Implementación del clásico juego Piedra, Papel o Tijeras en una Single Page Application (SPA), con una interfaz basada en custom elements y el manejo eficiente del estado del juego. La aplicación incluye una sencilla Inteligencia Artificial (IA) para jugar contra el usuario, permitiendo registrar victorias, derrotas y empates. El puntaje se almacena localmente mediante el uso de localStorage, ofreciendo una experiencia interactiva y marcando uno de los primeros logros en mis proyectos.",
        },
        multiplayer: {
          description:
            "Transformé este proyecto frontend en una aplicación Fullstack, incorporando Firebase y Express para ofrecer una experiencia de juego en línea completa. Firebase maneja la autenticación segura, el almacenamiento de datos en tiempo real y la creación de salas de juego, mientras que Express gestiona endpoints para funciones como historial de partidas y juego en tiempo real. Este proyecto destaca mi habilidad para desarrollar tanto en el frontend como en el backend, ofreciendo una experiencia interactiva y dinámica.",
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
      greetings: "Hi,",
      presentation: "I'm Axel",
      whatIdo: "I'm a Web Developer",
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
          "When I delved into the world of full-stack web development, I started with miniprojects to familiarize myself with the technologies. One of these projects focuses on consuming data from the MercadoLibre API, exploring and applying API consumption techniques to gather real-time information about products on MercadoLibre. In contrast, another of my early projects in this journey was a To-Do List application, designed to be simple yet functional. The main objective of this project was to apply and reinforce the basic concepts of HTML, CSS, and Javascript, providing a hands-on and tangible experience in learning these fundamentals.",
      },

      ppt: {
        title: "Rock Paper Scissors",
        singleplayer: {
          description:
            "Implementation of the classic Rock, Paper, Scissors game in a Single Page Application (SPA), with an interface based on custom elements and efficient game state management. The application includes a simple Artificial Intelligence (AI) for playing against the user, allowing the recording of wins, losses, and draws. The score is stored locally using localStorage, offering an interactive experience and marking one of the first achievements in my projects.",
        },
        multiplayer: {
          description:
            "I transformed this frontend project into a Fullstack application, incorporating Firebase and Express to provide a complete online gaming experience. Firebase handles secure authentication, real-time data storage, and room creation, while Express manages endpoints for functions such as game history and real-time gameplay. This project highlights my ability to develop both frontend and backend, delivering an interactive and dynamic experience.",
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
