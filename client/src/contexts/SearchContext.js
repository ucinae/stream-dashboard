import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = props => {
  const [naverSearch, setNaverSearch] = useState([])
  const [youtubeSearch, setYoutubeSearch] = useState([])
  const [twitterSearch, setTwitterSearch] = useState([])

  // TODO 공통 중복 체크, input 비우기
  const addNaverSearch = (search, e) => {
    const newSearch = search.trim()
    if (!naverSearch.includes(newSearch) && newSearch !== '') {
      setNaverSearch([...naverSearch, newSearch])
    }
  }

  const addYoutubeSearch = (search, e) => {
    const newSearch = search.trim()
    if (!youtubeSearch.includes(newSearch)) {
      setYoutubeSearch([...youtubeSearch, newSearch])
    }
  }

  const addTwitterSearch = (search, e) => {
    const newSearch = search.trim()
    if (!twitterSearch.includes(newSearch)) {
      setTwitterSearch([...twitterSearch, newSearch])
    }
  }

  return (
    <SearchContext.Provider value={{ 
      twitterSearch,
      naverSearch,
      youtubeSearch,
      addNaverSearch,
      addYoutubeSearch,
      addTwitterSearch
    }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider