import React from "react";
import Header from "./components/common/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ButunSayilar from "./pages/butunSayilar/ButunSayilar";
import Iletisim from "./pages/iletisim/Iletisim";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/arsiv" component={ButunSayilar} />
          <Route exact path="/iletisim" component={Iletisim} />
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
