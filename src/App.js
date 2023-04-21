import "./App.css";
import Header from "./backbone/Header";
import Footer from "./backbone/Footer";
import "../node_modules/flowbite/dist/flowbite"
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./pages/Category";
import Ditails from "./pages/Ditails";
import NewsLatest from "./pages/news";
import Datastc from "./dbitems/dbit";
import NewsDitails from "./pages/NewsDitails";
import Ndatastc from "./dbitems/dbnews";
import ContactUs from "./pages/ContactUs";
import { StateContext } from "./context/StateContext";

function App() {

  const { Industries } = Datastc("industries", 'en')
  const { Services } = Datastc("services", 'en')
  const { Products } = Datastc("products", 'en')
  const { Cnews } = Ndatastc('cnews', 'en')
  return (
    <div className="App font-serif">
      <Router>
        <StateContext>
          <Header />
          <div className="Content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/Contact">
                <ContactUs />
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

              {Industries.map((link, i) => (
                <Route path={"/" + link.slug.current.replace(" ", "_")} key={i}>
                  <Ditails title="Industries" search={link.slug.current.replace(" ", "_")} />
                </Route>
              ))}

              {Services.map((link, i) => (
                <Route path={"/" + link.slug.current.replace(" ", "_")} key={i}>
                  <Ditails title="Services" search={link.slug.current.replace(" ", "_")} />
                </Route>
              ))}

              {Products.map((link, i) => (
                <Route path={"/" + link.slug.current.replace(" ", "_")} key={i}>
                  <Ditails title="Products" search={link.slug.current.replace(" ", "_")} />
                </Route>
              ))}

              {Cnews.map((link, i) => (
                <Route path={"/" + link._id} key={i}>
                  <NewsDitails item={link} />
                </Route>
              ))}

            </Switch>
          </div>
          <Footer />
        </StateContext>
      </Router>
    </div>
  );
}

export default App;
