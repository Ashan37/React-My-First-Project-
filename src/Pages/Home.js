import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'
import './home.css';

export default function Home() {
  return (
      <div className='home'>
        <TopicBox/>
        <Content/>
      </div>
      
  )
}
