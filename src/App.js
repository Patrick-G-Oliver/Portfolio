import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Home from "./Components/Home.js";
import AddArticle from "./Components/AddArticle.js";
import DisplayArticles from "./Components/DisplayArticles.js";
import NewArticles from "./Components/NewArticles";

const StyledContatinerDiv = styled.div`
  text-align: center;
`;

const RedH1 = styled.h1`
  color: firebrick;
  font-size: 2rem;
`;

const SpacedLinkDivs = styled.div`
  display: inline-block;
  padding: 10px 20px;
`;

const App = () => {
  return (
    <StyledContatinerDiv>
      <nav>
        <RedH1>Article List Maker</RedH1>
          <SpacedLinkDivs>
            <Link to="/">Home</Link>
          </SpacedLinkDivs>
          <SpacedLinkDivs>
            <Link to="/NewArticles">Add your articles here.</Link>
          </SpacedLinkDivs>
          <SpacedLinkDivs>
            <Link to="/DisplayArticles">Some articles to interest you...</Link>
          </SpacedLinkDivs>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/NewArticles" component={NewArticles} />
      <Route path="/DisplayArticles" component={DisplayArticles} />
    </StyledContatinerDiv>
  );
};
export default App;