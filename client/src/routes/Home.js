import React from 'react'
import SearchBox from '../components/SearchBox';

import youtube from '../assets/youtube.png'
import KeyBox from '../components/KeyBox';
import YoutubeCard from '../components/youtube/YoutubeCard'
import NaverCard from '../components/naver/NaverCard';
import TwitterCard from '../components/twitter/TwitterCard';

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <SearchBox logo={youtube} color="red" />
      <KeyBox keys={['java', 'kotlin', 'spring', 'react']} />
      <YoutubeCard 
        search="dog"
        title="Sleeping Dogs - Definitive Edition | GeForce RTX2060 | i7 8750H | 8GB DDR4 x 2 | ROG Strix Scar 2"
        channelTitle="RTX 2060 Gaming"
        description="Sleeping Dogs - Definitive Edition testing on Asus ROG Scar 2 rtx 2060 benchmark with high settings | max settings! ASUS ROG STRIX SCAR II GL504GV ..."
        publishedAt="2019-08-15T13:20:45.000Z"
        thumbnail="https://i.ytimg.com/vi/bxrMeXKI8p4/mqdefault.jpg"
      />
      <NaverCard 
        search="dog"
        title="(1) Demasie, HOFMANN, 엘꼬르떼잉글스, The dog is hot, 라치나타"
        description="다시 아래로 쭉 걸어내려와서 간 곳은, The Dog is Hot (더 도그 이즈 핫) 이라는 핫도그 집- 나는 루꼴라와 선드라이드 토마토, 구아카몰, 치즈가 올라간 specialdog...
스위트 투스 그리고... "
        bloggername="스위트 투스 그리고 여행"
        postdate="20190811"
        link="https://blog.naver.com/sooparkeg/221613233695"
      />
      <TwitterCard 
        search="dog"
        text="16 augusti 1861 dog drottning Ranavalona I av Madagaskar som fr\xc3\xa5n 1828 regerade landet med h\xc3\xa5rd hand och h\xc3\xb6ll poten\xe2\x80\xa6 https://t.co/Q5oD7bjEaX"
        screenName="kvinnohistoria"
        name="Kvinnohistoria"
        createdAt="20190816151222"
        profileImageUrl= "http://pbs.twimg.com/profile_images/728320494718570500/CMJmvf-b_normal.jpg"
        favoriteCount="0"
      />
    </div>
  )
}

export default Home
