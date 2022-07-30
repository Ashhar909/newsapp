import React from 'react'
import Navbar from './components/Navbar';
import NewsAll from './components/NewsAll'
import NewsState from './Context/NewsState';


export default function App(){

    return (
      <div>
      <NewsState>
        <Navbar />
        <NewsAll />
      </NewsState>
      </div>
    )
  
}

