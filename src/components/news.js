import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../index.css'

function News() {

  const [news, setNews] = useState([])

  useEffect(() => {
      axios.get(' https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3c1efe571c764dc48695b5baf7e696b6')
      .then((response) => {
        console.log(response.data.articles);
        setNews(response.data.articles)
      })
  
    },[])
  return (
    <div className=''>

      {news.map((value) => {
        return (
          <div className='news-item'>
            <img className='news-img' src={value.urlToImage} alt={'image'} />
            <h3>{value.title}</h3>
            <h5>{value.description}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default News;