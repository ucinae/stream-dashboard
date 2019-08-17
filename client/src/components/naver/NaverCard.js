import React from 'react'
import { Row, Col, Card, Tag, Button } from 'antd'

const { Meta } = Card

const NaverCard = ({ search, title, bloggername, description, postdate, link }) => {
  return (
    <Card>
      <Row type="flex" gutter="20">
        <Col>
          <Tag>#{search}</Tag>
          <b>{postdate}</b>
          <Button type="primary" href={link}>link</Button>
          <Meta
            style={{ margin: '1rem 0' }}
            title={title}
            description={bloggername}
          />
          <p>{description}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default NaverCard