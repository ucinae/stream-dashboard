import React from 'react'
import SearchBox from '../components/SearchBox';

import youtube from '../assets/youtube.png'
import KeyBox from '../components/KeyBox';

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <SearchBox logo={youtube} color="red" />
      <KeyBox keys={['java', 'kotlin', 'spring', 'react']} />
    </div>
  )
}

export default Home
