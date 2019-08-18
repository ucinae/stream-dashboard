import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'

import SearchBox from '../SearchBox'
import KeyBox from '../KeyBox'
import YoutubeCard from './YoutubeCard'
import youtubeLogo from '../../assets/youtube.png'

const Board = styled.div`
  width: 550px;
`

const YoutubeBoard = ({ keys, items, addSearch, removeSearch }) => {
  return (
    <Board>
      <SearchBox logo={youtubeLogo} addSearch={addSearch} />
      <KeyBox keys={keys} removeSearch={removeSearch} />
      {
        items && items.map(item => (
          <YoutubeCard
            key={uuid()}
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
