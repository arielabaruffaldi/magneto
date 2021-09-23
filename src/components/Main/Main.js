import React, { useEffect } from "react";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Main.module.scss";
import Success from "../Success/Success";
import { useHistory } from 'react-router-dom'
import { restartGeneralState } from './../../store/actions';

const Main = (props) => {
  const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    return history.listen((location) => {
      dispatch(restartGeneralState())
    })
  }, [history])

  const state = useSelector((state) => state.general);
  return (
    <main className={styles.Main}>
      {state.loading && <Loader />}
      {state.error ? <p className={styles['error']}>{state.errorMessage}</p> : null}
      {state.success ? <Success /> : props.children}
    </main>
  );
};

export default Main;
