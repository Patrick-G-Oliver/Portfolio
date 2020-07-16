import React from 'react';
import styled from "styled-components";

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

const ArticleCards = props => {
    
    return (
        <div>
            {props.articlesData.map( (article) => {
                return (
                    <StyledCardBorderDiv>
                        <StyledHeaders>{article.title}</StyledHeaders>
                        <p>date: {article.published_date}</p>
                        <p>Abstract: {article.abstract}</p>
                        <p>URL: {article.url}</p>
                    </StyledCardBorderDiv>
                ) 
            })}
        </div>
    );
};

export default ArticleCards;
