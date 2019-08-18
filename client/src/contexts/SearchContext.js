import React, { createContext, useState, useEffect } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

export const SearchContext = createContext()

const SearchContextProvider = props => {
  const [stompClient, setStompClient] = useState(Stomp.over(new SockJS('http://localhost:8080/websocket')))

  const [naverSearch, setNaverSearch] = useState([])
  const [youtubeSearch, setYoutubeSearch] = useState([])
  const [twitterSearch, setTwitterSearch] = useState([])

  useEffect(() => {
    stompClient.connect({}, frame => {
      console.log('Connected: ' + frame);
    })
  })

  // TODO 공통 중복 체크, input 비우기
  const addNaverSearch = (search, e) => {
    const newSearch = search.trim()
    if (!naverSearch.includes(newSearch) && newSearch !== '') {
      setNaverSearch([...naverSearch, newSearch])
      stompClient.send("/app/naver/search", {}, search)
    }
  }

  const addYoutubeSearch = (search, e) => {
    const newSearch = search.trim()
    if (!youtubeSearch.includes(newSearch)) {
      setYoutubeSearch([...youtubeSearch, newSearch])
      stompClient.send("/app/youtube/search", {}, search)
    }
  }

  const addTwitterSearch = (search, e) => {
    const newSearch = search.trim()
    if (!twitterSearch.includes(newSearch)) {
      setTwitterSearch([...twitterSearch, newSearch])
      stompClient.send("/app/twitter/search", {}, search)
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