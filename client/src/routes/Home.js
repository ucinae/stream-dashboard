import React, { useState } from 'react'
import { Button } from 'antd'
import { useSpring, animated } from 'react-spring'

const Home = () => {
  const [items, setItems] = useState([])
  const props = useSpring({
    to: [{opacity: 1, color: '#ffaaee'}, {opacity: 0, color: 'rgb(14,26,19)'}],
    from: {opacity: 0, color: 'red'}
  })
  return (
    <div>
      <h1>Hello</h1>
      <animated.div style={props}>I will fade in</animated.div>
      <Button onClick={() => setItems([Math.random(), ...items])}>Click</Button>
      <div>
        {
          items.map(item => (<animated.div style={props}>{item}</animated.div>))
        }
      </div>
    </div>
  )
}

export default Home
