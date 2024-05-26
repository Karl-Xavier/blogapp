import React from 'react'
import Header from '../../Component/Header/Header'
import BlogList from '../../Component/Blogg/BlogList/BlogList'
import { blogger } from '../../config/data'

const Home = () => {
  return (
    <div>
        <Header />
        <BlogList 
          bloggers={blogger}
        />
    </div>
  )
}

export default Home