import React, { useContext } from 'react'
import { Layout, Row, Col } from 'antd'

import { SearchContext } from '../contexts/SearchContext'
import NaverBoard from '../components/naver/NaverBoard'
import YoutubeBoard from '../components/youtube/YoutubeBoard'
import TwitterBoard from '../components/twitter/TwitterBoard'

// dummy data
import NaverDummyData from '../temp/NaverDummyData'
import YoutubeDummyData from '../temp/YoutubeDummyData'
import TwitterDummyData from '../temp/TwitterDummyData'

const Dashboard = () => {
  const { 
    naverSearch,
    twitterSearch,
    youtubeSearch,
    addNaverSearch,
    addYoutubeSearch,
    addTwitterSearch,
    removeNaverSearch,
    removeYoutubeSearch,
    removeTwitterSearch
  } = useContext(SearchContext)
  return (
    <Layout>
      <Row type="flex">
        <Col>
          <NaverBoard 
            addSearch={addNaverSearch} 
            removeSearch={removeNaverSearch}
            items={NaverDummyData} 
            keys={naverSearch} 
          />
        </Col>
        <Col>
          <YoutubeBoard
            addSearch={addYoutubeSearch}
            removeSearch={removeYoutubeSearch}
            items={YoutubeDummyData} 
            keys={youtubeSearch} />
        </Col>
        <Col>
          <TwitterBoard 
            addSearch={addTwitterSearch}
            removeSearch={removeTwitterSearch}
            items={TwitterDummyData} 
            keys={twitterSearch} 
          />
        </Col>
      </Row>
    </Layout>
  )
}

export default Dashboard
