import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { useRecoilState } from "recoil";
import { themeAtom } from "../hooks";
import css from "./Layout.css";
function Layout() {
  const [theme, setTheme] = useRecoilState(themeAtom);
  return (
    <div
      className={css.main__container}
      style={{
        backgroundColor: theme === "dark" ? "#3d3d3d" : "rgb(238 249 251)",
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export { Layout };
