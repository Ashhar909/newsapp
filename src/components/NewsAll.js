import React, { useContext } from "react";
import NewsItem from "./NewsItem";
import newsContext from "../Context/NewsContext";

const NewsAll = () => {
  const context = useContext(newsContext);
  const { news, theme, page, setPage } = context;
  
  const handlePrevious = () => {
    setPage(page-1);
  }
  const handleNext = () => {
    setPage(page+1);
  }
  

  return (
    <div className="container my-3">
      <div className="container my-3">
        <h1 className={`text-center text-${theme.text}`}>{news.articles.length !== 0? "Top headlines" : ""}</h1>
        <div className="row">
          {news.articles.length !==0  ? (
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
            <div className="text-center">
              <h2 className="container my-3 text-danger">No more feed</h2>
            </div>
          )}
        </div>
        {/* dflex makes responsive and to allign at different ends use the below class to wrap */}
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-dark mx-2" onClick={handlePrevious} disabled={page===1} >
            Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={handleNext} disabled={news.articles.length === 0}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsAll;
