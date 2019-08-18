import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = props => {
  const [twitterItems, setTwitterItems] = useState([])
  const [naverItems, setNaverItems] = useState([])
  const [youtubeItems, setYoutubeItems] = useState([])

  return (
    <SearchContext.Provider value={{ twitterItems, naverItems, youtubeItems }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider