import React, { useState, useEffect } from 'react'
import './blogpage.css'
import axios from 'axios'
import { BlogInfoCard, BlogPostModal } from '../../components'

export default function Blog() {

    const [blogs, setBlogs] = useState([])
    const [modalContent, setModalContent] = useState({})

    const handleBlogPostModal = (blog) => {
        setModalContent(blog)
        document.querySelector('.blog-post-modal-container').classList.add('blog-post-modal-container-active')
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://127.0.0.1:5000/posts',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: 'Basic cmljaGFyZDoxMjM='
            },
            data: {}
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setBlogs(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className='blog-container'>
            <div className='blog-content'>
                <h1 id='blog'>Blog</h1>
            </div>
            <BlogInfoCard />
            <div className='outer-blog-container'>
                <div className="cards-container">
                    {blogs.map((blog, index) => {
                        return (
                            <div className='blog-card' key={index}>
                                <div className="blog-card-image">
                                    <img src={"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80"} alt="..." />
                                </div>
                                <div className='blog-card-content'>
                                    <h2>{blog.title}</h2>
                                    <p>{blog.description}</p>
                                    <div className='blog-card-buttons'>
                                        <button
                                            onClick={handleBlogPostModal}
                                            className='read-more-btn'>
                                            <span></span>
                                            <p>Read More</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <BlogPostModal blogs={blogs} setBlogs={setBlogs} />
        </div>
    )
}
