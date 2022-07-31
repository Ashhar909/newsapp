import React, { useContext } from "react";
import NewsItem from "./NewsItem";
import newsContext from "../Context/NewsContext";

const NewsAll = () => {
  const context = useContext(newsContext);
  const { news, theme } = context;

  return (
    <div className="container my-3">
      <div className="container my-3">
        <h1 className={`text-${theme.text}`}>Top headlines </h1>
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
