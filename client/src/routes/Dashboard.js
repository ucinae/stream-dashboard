import React from 'react'
import { Layout, Row, Col } from 'antd'

import NaverBoard from '../components/naver/NaverBoard'
import YoutubeBoard from '../components/youtube/YoutubeBoard'
import TwitterBoard from '../components/twitter/TwitterBoard'

// dummy data
import NaverDummyData from '../temp/NaverDummyData'
import YoutubeDummyData from '../temp/YoutubeDummyData'
import TwitterDummyData from '../temp/TwitterDummyData'

const Dashboard = () => {
  return (
    <Layout>
      <Row type="flex" gutter="30">
        <Col>
          <NaverBoard items={NaverDummyData} keys={['dog', 'cat', '네이버']} />
        </Col>
        <Col>
          <YoutubeBoard items={YoutubeDummyData} keys={['dog', 'cat', '유튜브']} />
        </Col>
        <Col>
          <TwitterBoard items={TwitterDummyData} keys={['dog', 'cat', '트위터']} />
        </Col>
      </Row>
    </Layout>
  )
}

export default Dashboard
