import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from 'axios'

export class NewsAll extends Component {
  
  constructor(){
    super();
    this.state = {
      articles:[]
    }
  }
  

  componentDidMount(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0d896d1dde8e45d09ee92398097e3fc2')
        .then(res => {
            this.setState({
              articles:res.data.articles
            })
        })
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Top headlines</h1>
        <div className="row">
          {this.state.articles.map((item) => {
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
          })}
        </div>
      </div>
    );
  }
}

export default NewsAll;
