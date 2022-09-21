import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Change from "./pages/Change";
import Home from "./pages/Home";
import styles from "./App.module.css";

function App(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <h1>CRUD</h1>
      </header>
      <main className={styles.main}>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to='/users' />} />
            <Route path='/users' element={<Home />} />
            <Route path='/users/:idUser' element={<Home />} />
            <Route path='/users/:idUser/edit' element={<Change />} />
            <Route path='/users/create' element={<Change />} />
          </Routes>
        </Router>
      </main>
      <footer className={styles.footer}>
        <span>Created by Denis Repyev(c)</span>
      </footer>
    </>
  );
}

export default App;
