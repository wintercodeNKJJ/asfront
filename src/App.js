import "./App.css";
import Header from "./backbone/Header";
import Footer from "./backbone/Footer";
import "../node_modules/flowbite/dist/flowbite"
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Industries from "./pages/Industries";
import Ditails from "./pages/Ditails";
import NewsLatest from "./pages/news";

function App() {

  let links = ["Energy", "Automobile", "Event", "Education", "Finance", "Security", "PublicServicies", "E-commerce", "Health", "Security", "Agriculture", "Transport"];
  let slinks = ["Infrastructure", "Training", "Development", "Buisness"];
  let plinks = ["LewooTrack", "Fuel_card", "ERP", "E-Commerce"];
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Aboutus">
              <About />
            </Route>

            <Route path="/News">
              <NewsLatest />
            </Route>

            <Route path="/Industries">
              <Industries title="Industries" />
            </Route>

            {links.map((link) => (
              <Route path={"/" + link}>
                <Ditails title={link} />
              </Route>
            ))}

            {slinks.map((link) => (
              <Route path={"/" + link}>
                <Ditails title={link} />
              </Route>
            ))}

            {plinks.map((link) => (
              <Route path={"/" + link}>
                <Ditails title={link} />
              </Route>
            ))}

          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
