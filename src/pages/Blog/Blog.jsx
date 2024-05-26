import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { ArrowLeft } from 'phosphor-react'
import { blogger } from '../../config/data'

const Blog = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    let blog = blogger.find(blog => blog.id === parseInt(id))
    if(blog){
      setBlog(blog)
    }
  }, [])
  return (
    <div className='container p-3'>
        <Link to={'/'} style={{color: "black", textDecoration: "none"}}><ArrowLeft size={28}/> Go Back</Link>
        {
          blog ?
          <div>
            <header className="container">
              <p>Published on {blog.createdAt}</p>
              <h1>{blog.title}</h1>
            </header>
            <div className="container">
              <img className='img-fluid rounded' src={blog.cover} alt={blog.title}/>
              <p className='mt-4'>{blog.description}</p>
            </div>
          </div> : <h1>Error 404: Page Not Found</h1>
        }
    </div>
  )
}

export default Blog