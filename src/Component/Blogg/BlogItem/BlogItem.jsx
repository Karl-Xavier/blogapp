import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './BlogItem.css'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

const BlogItem = ( {blog:{ id, title, description, createdAt, authorName, authorAvatar, cover }}) => {
  return (
    
    <div className='col-lg-4 col-md-6 text-center p-2'>
        <Link style={{textDecoration: "none", color: "#000"}} to={`blog/${id}`}>
            <img className='rounded img-fluid' src={cover} alt={title} />
            <div>
                <h3 style={{fontWeight: "bold", marginTop: "10px"}}>{title}</h3>
                <p className='description'>{description}</p>
            </div>
            <div className="footer">
                <div className="author">
                <img src={authorAvatar} alt={authorName} />
                
                <div>
                    <h6>{authorName}</h6>
                    <p>{createdAt}</p>
                </div>
                </div>
                <Link to={`/blog/${id}`} style={{color: "#333"}}><ArrowRight size={28}/></Link>
            </div>
        </Link>
    </div>
  )
}

export default BlogItem