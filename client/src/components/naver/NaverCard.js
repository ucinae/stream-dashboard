import React from 'react'
import { Row, Col, Card, Tag, Button } from 'antd'

const { Meta } = Card

const NaverCard = ({ search, title, bloggername, description, postdate, link }) => {
  return (
    <Card>
      <Row type="flex">
        <Col>
          <Tag>#{search}</Tag>
          <b>{postdate}</b>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button type="primary">link</Button>
          </a>
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