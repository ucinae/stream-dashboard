import React from 'react'
import { Row, Col, Card, Avatar, Tag } from 'antd'

const { Meta } = Card

const TwitterCard = ({ search, text, screenName, name, createdAt, profileImageUrl, favoriteCount }) => {
  return (
    <Card>
      <Row type="flex" gutter="20">
        <Col>
          <Tag>#{search}</Tag>
          <b>{createdAt}</b>
          <Meta
            avatar={<Avatar src={profileImageUrl} />}
            title={<div><span>{screenName}</span><p>@{name} - {createdAt}</p></div>}
            description={text}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default TwitterCard