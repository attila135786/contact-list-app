import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contacts from "./routes/Contacts";
import AddContact from "./routes/AddContact";
import EditContact from "./routes/EditContact";
import { AppContext, defaultState } from "./store/AppContext";

import "@fontsource/roboto";
import "./App.scss";
import styles from "./App.scss";

const App = () => {
  const [appState, setAppState] = useState(defaultState);
  return (
    <>
      <div className={styles.container}>
        <AppContext.Provider value={{ appState, setAppState }}>
          <Router>
            <>
              <Routes>
                <Route path="/add/:id" element={<AddContact />} />
                <Route path="/edit/:id" element={<EditContact />} />
                <Route exact path="/" element={<Contacts />} />
              </Routes>
            </>
          </Router>
        </AppContext.Provider>
      </div>
    </>
  );
};

export default App;
