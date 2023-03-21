import "./App.css";
import Header from "./backbone/Header";
import Footer from "./backbone/Footer";
import "../node_modules/flowbite/dist/flowbite"
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Category from "./pages/Category";
import Ditails from "./pages/Ditails";
import NewsLatest from "./pages/news";
import Datastc from "./dbitems/dbit";
import NewsDitails from "./pages/NewsDitails";
import Ndatastc from "./dbitems/dbnews";
import * as te from 'tw-elements';

function App() {

  const { Industries } = Datastc("industries")
  const { Services } = Datastc("services")
  const { Products } = Datastc("products")
  const { Cnews } = Ndatastc('cnews');
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
              <Category title="Industries" />
            </Route>

            <Route path="/Servicies">
              <Category title="Servicies" />
            </Route>

            <Route path="/Products">
              <Category title="Products" />
            </Route>

            <Route path="/Research_&_Development">
              <Category title="Research_&_Development" />
            </Route>

            {Industries.map((link) => (
              <Route path={"/" + link.title.replace(" ", "_")}>
                <Ditails title="Industries" search={link.title.replace(" ", "_")} />
              </Route>
            ))}

            {Services.map((link) => (
              <Route path={"/" + link.title.replace(" ", "_")}>
                <Ditails title="Services" search={link.title.replace(" ", "_")} />
              </Route>
            ))}

            {Products.map((link) => (
              <Route path={"/" + link.title.replace(" ", "_")}>
                <Ditails title="Products" search={link.title.replace(" ", "_")} />
              </Route>
            ))}

            {Cnews.map((link) => (
              <Route path={"/newsDitail/" + link._id}>
                <NewsDitails item={link} />
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
