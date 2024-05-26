import React from 'react'
import BlogItem from '../BlogItem/BlogItem';
import 'bootstrap/dist/css/bootstrap.css'
import './BlogList.css'

const BlogList = ({ bloggers }) => {
  return (
    <div className='container items'>
       <div className="row">
            {bloggers.map((blog) => {
                return (
                    <BlogItem
                        blog={blog}
                        key={blog.id}
                    />
                );
            })}
       </div> 
    </div>
  )
}

export default BlogList