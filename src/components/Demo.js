import React, { Component } from 'react'
import axios from 'axios'

export class Demo extends Component {
  state = {
    news:[]
  }
  componentDidMount(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0d896d1dde8e45d09ee92398097e3fc2')
        .then(res => {
            console.log(res);
            this.setState({
              news:res.data.articles
            })
        })
  }
  render() {
    let newsList = this.state.news.length ? (
      this.state.news.map(item => {
        return(
          <div className='container my-3'>
            <div className="card" style={{width: "18rem"}}>
              <img src={item.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.author}</h5>
                <p className="card-text">
                  {item.content}
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center'>Not able to Load</div>
    )
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default Demo