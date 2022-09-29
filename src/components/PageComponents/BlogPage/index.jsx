import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function BlogPage() {
    const navigate = useNavigate()
    const [blogs, setBlogs] = React.useState([])

    const handleBlogNavigate = () => {
        navigate('/blog');
    }
    const API = 'https://blog-server-portfolio.onrender.com/posts';
    useEffect(() => {
        const options = {
            method: 'GET',
            url: API,
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
        <div className='blogpage-container'>
            <div className='blog-page-content'>
                <h1 id='blog-page'>Blog Page</h1>
            </div>
            <div className='outer-home-blog-container'>
                <div className='inner-home-blog-container'>

                    <h1>coming Soon!</h1>
                    <p>A blog page with regular posts about my encounters with learning to program, as well as information about JavaScript, HTML/CSS, React, Flask and other languages and Framework tutorials</p>
                </div>
            </div>
            {/* <div className='outer-home-blog-container'>
                <div className="home-cards-container">
                    {blogs.slice(0, 3).map((blog, index) => {
                        return (
                            <div className='card' key={index}>
                                <div className="card-image">
                                    <img src={"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80"} alt="..." />
                                </div>
                                <div className='card-content'>
                                    <h2>{blog.title}</h2>
                                    <p>{blog.description}</p>
                                    <div className='blog-card-buttons'>
                                        <button className='read-more-btn'>
                                            <span></span>
                                            <p>Read More</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex-end w-100 pr-2'>
                    <p onClick={handleBlogNavigate} className='more-blog-btn'>Read more Posts here!</p>
                </div>
            </div> */}
        </div>
    )
}
