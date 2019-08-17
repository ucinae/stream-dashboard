import React from 'react'
import styled from 'styled-components'

import SearchBox from '../SearchBox'
import KeyBox from '../KeyBox'
import YoutubeCard from './YoutubeCard'
import youtubeLogo from '../../assets/youtube.png'

const Board = styled.div`
  width: 550px;
`

const YoutubeBoard = ({ keys, items }) => {
  return (
    <Board>
      <SearchBox logo={youtubeLogo} />
      <KeyBox keys={keys} />
      {
        items && items.map(item => (
          <YoutubeCard 
            search={item.search}
            title={item.title}
            channelTitle={item.channelTitle}
            description={item.description}
            publishedAt={item.publishedAt}
            thumbnail={item.thumbnail}
          />
        ))
      }
    </Board>
  )
}

export default YoutubeBoard
