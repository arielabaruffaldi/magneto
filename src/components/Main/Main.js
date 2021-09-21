import React from "react";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import styles from "./Main.module.scss";

const Main = (props) => {
  const state = useSelector((state) => state.general);
  console.log("state", state)
  return (
    <main className={styles.Main}>
      {props.children}
      {state.loading ? <Loader /> : null}
      {state.error ? <p className={styles['error']}>{state.errorMessage}</p> : null}
    </main>
  );
};

export default Main;
