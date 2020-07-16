import React, { useState } from "react";
import AddArticle from "./AddArticle";
import UserAddedArticles from "./UserAddedArticles";

const NewArticles = () => {
    const [newArticles, setNewArticles] = useState([{
        articleUrl: "",
        category: ""
        }
    ])

    const handleFormSubmission = (newArticle) => {
        setNewArticles([...newArticles, newArticle])
    };

    return (
        <div>
            <AddArticle handleFormSubmission={handleFormSubmission} />
            <UserAddedArticles newArticles={newArticles} />
        </div>
    );
};

export default NewArticles;