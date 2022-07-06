import React, { Component } from 'react'
import axios from 'axios';

export class NewsItem extends Component {
  state = {
    news:[]
  }

  componentDidMount(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0d896d1dde8e45d09ee92398097e3fc2')
        .then(res => {
            console.log(res.data.articles);
            this.setState({
              news:res.data.articles
            })
        })
  }
  render() {
    let {title , desc, url} = this.props
    return (
      <div className='container my-3'>
      <div className="card" style={{width: "18rem"}}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc}
          </p>
          <a href="/" className="btn btn-sm btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
    );
  }
}

export default NewsItem