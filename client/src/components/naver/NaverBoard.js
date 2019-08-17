import React from 'react'
import styled from 'styled-components'

import SearchBox from '../SearchBox'
import KeyBox from '../KeyBox'
import NaverCard from './NaverCard'
import naverLogo from '../../assets/naver.png'

const Board = styled.div`
  width: 550px;
`

const NaverBoard = ({ keys, items }) => {
  return (
    <Board>
      <SearchBox logo={naverLogo} />
      <KeyBox keys={keys} />
      {
        items && items.map(item => (
          <NaverCard 
            search={item.search}
            title={item.title}
            description={item.description}
            bloggername={item.bloggername}
            postdate={item.postdate}
            link={item.link}
          />
        ))
      }
    </Board>
  )
}

export default NaverBoard
