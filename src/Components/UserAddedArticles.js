import React from "react";

const UserAddedArticles = (props) => {
    return (
        <div>
            {props.newArticles.map(newArticle => (
                <div>
                    <h2>{newArticle.articleUrl}</h2>
                    <p>{newArticle.category}</p>
                </div>      
            ))}
        </div>
    )
}

export default UserAddedArticles;