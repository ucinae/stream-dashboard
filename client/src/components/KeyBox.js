import React from 'react'
import { Row, Card, Tag, Icon } from 'antd'

import RandomColor from '../utils/RandomColor'

const KeyBox = ({ keys, removeSearch }) => {
  return (
    <Row>
      <Card>
        {
          keys.map(key => (<Tag color={RandomColor()} closable onClose={() => removeSearch(key)} key={key}>#{key}</Tag>))
        }
        <Icon style={{ float: 'right' }} type="sync" spin={keys && keys.length > 0} />
      </Card>
    </Row>
  )
}

export default KeyBox
