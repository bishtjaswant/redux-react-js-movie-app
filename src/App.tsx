import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={MovieDetail} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
