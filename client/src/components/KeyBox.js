import React from 'react'
import { Row, Card, Tag, Icon } from 'antd'

import RandomColor from '../utils/RandomColor'

const KeyBox = ({ keys }) => {
  return (
    <Row>
      <Card>
        {
          keys && keys.map(key => (<Tag color={RandomColor()}>#{key}</Tag>))
        }
        <Icon style={{ float: 'right' }} type="sync" spin={keys} />
      </Card>
    </Row>
  )
}

export default KeyBox
