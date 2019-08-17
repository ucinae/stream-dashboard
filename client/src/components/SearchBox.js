import React from 'react'
import { Row, Avatar, Input } from 'antd'

const { Search } = Input

const SearchBox = ({ logo, color }) => {
  return (
    <Row>
      <Search 
        addonBefore={<Avatar src={logo} />} 
        placeholder="검색어 입력" 
        enterButton="추가" 
        size="large"
        />
    </Row>
  )
}

export default SearchBox
