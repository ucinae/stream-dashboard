import React from 'react'
import { Row, Avatar, Input } from 'antd'

const { Search } = Input

const SearchBox = ({ logo, color, addSearch }) => {
  return (
    <Row>
      <Search 
        addonBefore={<Avatar src={logo} />} 
        placeholder="검색어 입력" 
        enterButton="추가"
        id="test"
        size="large"
        allowClear
        onSearch={addSearch}
        />
    </Row>
  )
}

export default SearchBox
