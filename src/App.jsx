import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./static/Header";
import Home from "./page/Home";
import Footer from "./static/Footer";
// import Mainlayout from "./layout/Mainlayout";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Home />
      <Footer/>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
