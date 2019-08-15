import React from 'react'
import SearchBox from '../components/SearchBox';

import youtube from '../assets/youtube.png'

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <SearchBox logo={youtube} color="red" />
    </div>
  )
}

export default Home
