import React, { createContext, useState, useEffect } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

export const SearchContext = createContext()

const SearchContextProvider = props => {
  const [stompClient] = useState(Stomp.over(new SockJS('http://localhost:8080/websocket')))

  const [naverSearch, setNaverSearch] = useState([])
  const [youtubeSearch, setYoutubeSearch] = useState([])
  const [twitterSearch, setTwitterSearch] = useState([])

  useEffect(() => {
    console.log("test")
    stompClient.connect({}, frame => {
      console.log('Connected: ' + frame);
    })
  }, [])

  useEffect(() => {
    console.log('mount and update')
    window.addEventListener("beforeunload", removeAllSearch)

    return () => {
      console.log('unmount')
      window.removeEventListener("beforeunload", removeAllSearch)
    }
  })

  // TODO 전부 지워지지 않는 버그 해결하기
  const removeAllSearch = ev => {
    ev.preventDefault();
    naverSearch.forEach(search => {
      stompClient.send("/app/naver/remove", {}, search)
    })
    youtubeSearch.forEach(search => {
      stompClient.send("/app/youtube/remove", {}, search)
    })
    twitterSearch.send(search => {
      stompClient.send("/app/twitter/remove", {}, search)
    })
    setNaverSearch([])
    setYoutubeSearch([])
    setTwitterSearch([])
    stompClient.disconnect()
  }

  // TODO input 비우기
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

  const removeNaverSearch = key => {
    setNaverSearch(naverSearch.filter(search => search !== key))
    stompClient.send("/app/naver/remove", {}, key)
  }

  const removeYoutubeSearch = key => {
    setYoutubeSearch(youtubeSearch.filter(search => search !== key))
    stompClient.send("/app/youtube/remove", {}, key)
  }

  const removeTwitterSearch = key => {
    setTwitterSearch(twitterSearch.filter(search => search !== key))
    stompClient.send("/app/twitter/remove", {}, key)
  }

  return (
    <SearchContext.Provider value={{ 
      twitterSearch,
      naverSearch,
      youtubeSearch,
      addNaverSearch,
      addYoutubeSearch,
      addTwitterSearch,
      removeNaverSearch,
      removeYoutubeSearch,
      removeTwitterSearch
    }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider