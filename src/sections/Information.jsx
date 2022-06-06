import React from 'react'
import Carousel from '../components/information/Carousel'
import Blogposts from '../components/information/Blogposts'

const Information = () => {
  return (
    <div className="px-paddingsm md:px-paddingmd lg:px-paddinglg">
      <Carousel />
      <Blogposts />
    </div>
  )
}

export default Information