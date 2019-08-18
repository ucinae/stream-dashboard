import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'

import SearchBox from '../SearchBox'
import KeyBox from '../KeyBox'
import TwitterCard from './TwitterCard'
import twitterLogo from '../../assets/twitter.png'

const Board = styled.div`
  width: 550px;
`

const TwitterBoard = ({ keys, items, addSearch }) => {
  return (
    <Board>
      <SearchBox logo={twitterLogo} addSearch={addSearch} />
      <KeyBox keys={keys} />
      {
        items && items.map(item => (
          <TwitterCard
            key={uuid()}
            search={item.search}
            text={item.text}
            screenName={item.screenName}
            name={item.name}
            createdAt={item.createdAt}
            profileImageUrl={item.profileImageUrl}
            favoriteCount={item.favoriteCount}
          />
        ))
      }
    </Board>
  )
}

export default TwitterBoard
