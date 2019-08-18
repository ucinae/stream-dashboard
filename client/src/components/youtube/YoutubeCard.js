import React from 'react'
import { Row, Col, Card, Tag } from 'antd'

const { Meta } = Card

const YoutubeCard = ({ search, title, channelTitle, description, publishedAt, thumbnail }) => {
  return (
    <Card>
      <Row type="flex">
        <Col>
          <img
              alt="thumbnail"
              src={thumbnail}
            />
        </Col>
        <Col>
          <Row>
            <Tag>#{search}</Tag>
            <b>{publishedAt}</b>
          </Row>
          <Row>
            <Meta
              style={{ margin: '1rem 0', width: '500px' }}
              title={title}
              description={channelTitle}
            />
          </Row>
          <Row>
            <p>{description}</p>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default YoutubeCard
