import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/home";
import Error404 from "./pages/error404";
import Movie from "./pages/movie";
import Serie from "./pages/serie";

import NewMovies from "./pages/new-movies";
import NewSeries from "./pages/new-series";

import Popular from "./pages/popular";
import Search from "./pages/search";

import MenuTop from "./components/MenuTop";



function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header style={{zIndex: 1}}>
          {/* zindex para que el menu sea clicleable despues de oscurecer el fondo */}
          <MenuTop/>
        </Header>

        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>

          <Route path="/new-movies" exact={true}>
            <NewMovies />
          </Route>

          <Route path="/popular" exact={true}>
            <Popular />
          </Route>

          <Route path="/search" exact={true}>
              <Search />
            </Route>

            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>

            <Route path="/serie/:id" exact={true}>
              <Serie />
            </Route>

            <Route path="/new-series" exact={true}>
              <NewSeries />
            </Route>

            <Route path="*" >
              <Error404 />
            </Route>
          </Switch>

        </Content>
      </Router>
    </Layout>
  );
}

export default App;
