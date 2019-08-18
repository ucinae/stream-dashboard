import React, { useState, useEffect } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

const Home = () => {
  const [client, setClient] = useState(Stomp.over(new SockJS('http://localhost:8080/websocket')))

  useEffect(() => {
    client.connect({}, frame => {
      // console.log('Connected: ' + frame);
      client.subscribe('/topic/hello', hello => {
        console.log(hello)
      })
    })
  })

  const changeHandler = e => {
    client.send("/app/hello", {}, e.target.value);
  }

  return (
    <div>
      <h1>Hello</h1>
      <input onChange={changeHandler} />
    </div>
  )
}

export default Home
