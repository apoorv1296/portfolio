import React from "react";
import "./style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header.js";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import ResumePg from "./Components/ResumePg";
import Projectpage from "./Components/Projectpage";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/resume" component={ResumePg} />
        <Route path="/project" component={Projectpage} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
