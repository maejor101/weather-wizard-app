import React from 'react'
import axios from 'axios'

function Fiveday() {

  
  const urll = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=879c8b91e4e60d5d9eaf44c9e73b38f5'
  return (
    <div className='app'>
      <h1>5 day forecast</h1>
    </div>
  )
}

export default Fiveday;
