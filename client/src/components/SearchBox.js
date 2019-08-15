import React from 'react'
import { Avatar, Input } from 'antd'

const { Search } = Input

const SearchBox = ({ logo, color }) => {
  return (
    <div style={{ width: "350px", background: "#fff" }}>
      <Search 
        addonBefore={<Avatar src={logo} />} 
        placeholder="검색어 입력" 
        enterButton="추가" 
        size="large"
        />
    </div>
  )
}

export default SearchBox
