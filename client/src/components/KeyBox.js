import React from 'react'
import { Tag, Icon } from 'antd'

import RandomColor from '../utils/RandomColor'

const KeyBox = ({ keys }) => {
  return (
    <div style={{ margin: '1rem' }}>
      {
        keys.map(key => (<Tag color={RandomColor()}>#{key}</Tag>))
      }
      <Icon type="sync" spin />
    </div>
  )
}

export default KeyBox
