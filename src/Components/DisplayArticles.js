import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ArticleCards from "./ArticleCards";

const StyledHeaders = styled.h2`
    fontsize: 1rem;
`;

const StyledCardBorderDiv = styled.div`
    border: 3px solid green;
    background-color: black; opacity: 0.6;
    width: 25%;
    margin 1% auto;
    text-align: center;
    color: yellow;
    border-radius: 10px;
`;


const ApiTest = () => {

  const [articlesData, setArticlesData] = useState([])

  useEffect( () => {
    axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3ANiRLtIDcOCGFU0iqpojDGU1Sa8eDO7") 
      .then(response => {
        console.log('response', response.data.results)
        setArticlesData(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <div className="App">
        <h1 className="Header">Some articles that may interest you...</h1>
      </div>
      <ArticleCards
        articlesData = {articlesData}
      />
    </div>
  );
};

export default ApiTest;
