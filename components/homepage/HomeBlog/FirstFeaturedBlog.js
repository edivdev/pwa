import React from 'react'

export default function FirstFeaturedBlog({ blogEntry }) {
  return (
    <div className='blog-first'>{blogEntry.title}</div>
  )
}
