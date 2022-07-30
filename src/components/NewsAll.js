import React, { useContext, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import newsContext from "../Context/NewsContext";

const NewsAll = () => {
  const context = useContext(newsContext);

  const { news, fetchAll, theme } = context;

  const [category, setCategory] = useState("general");

  const handleClick = async (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    fetchAll(category);
    // eslint-disable-next-line
  }, [category]);

  return (
    <div className="container my-3">
      <div className="dropdown">
        <button
          className={`btn dropdown-toggle btn-${
            theme.mode === "light" ? "secondary" : "dark"
          }`}
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select Category
        </button>
        <div
          className="dropdown-menu"
          style={{
            backgroundColor: `${theme.mode === "light" ? "white" : "black"}`,
          }}
          aria-labelledby="dropdownMenu2"
        >
          <button
            className={`dropdown-item ${
              theme.mode === "light" ? "lt" :"dk"
            } text-${
              theme.mode === "light" ? "dark" : "light"
            }`}
            type="button"
            onClick={handleClick}
            value="general"
          >
            General
          </button>
          <button
            className={`dropdown-item ${
              theme.mode === "light" ? "lt" :"dk"
            } text-${
              theme.mode === "light" ? "dark" : "light"
            }`}
            type="button"
            onClick={handleClick}
            value="sports"
          >
            Sports
          </button>
          <button
            className={`dropdown-item ${
              theme.mode === "light" ? "lt" :"dk"
            } text-${
              theme.mode === "light" ? "dark" : "light"
            }`}
            type="button"
            onClick={handleClick}
            value="technology"
          >
            Tech
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Top headlines {category}</h1>
        <div className="row">
          {news.articles ? (
            news.articles.map((item) => {
              return (
                <div className="col-md-3" key={item.url}>
                  <NewsItem
                    title={item.title}
                    desc={item.description}
                    imageUrl={item.urlToImage}
                    newsUrl={item.url}
                  />
                </div>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAll;
