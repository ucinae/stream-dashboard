import React from 'react'
import styled from 'styled-components'

import SearchBox from '../SearchBox'
import KeyBox from '../KeyBox'
import TwitterCard from './TwitterCard'
import twitterLogo from '../../assets/twitter.png'

const Board = styled.div`
  width: 550px;
`

const TwitterBoard = ({ keys, items }) => {
  return (
    <Board>
      <SearchBox logo={twitterLogo} />
      <KeyBox keys={keys} />
      {
        items && items.map(item => (
          <TwitterCard
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
