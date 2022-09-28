import React from 'react'

export default function BlogPostModal() {

    const handleCloseModal = () => {
        document.querySelector('.blog-post-modal-container').classList.remove('blog-post-modal-container-active')
    }

    return (
        <div className='blog-post-modal-container'>
            <div className='blog-modal-header'>
                <h1>blog modal</h1>
                <span onClick={handleCloseModal}>X</span>
            </div>
            <div className="blog-modal-content">
                <div className="blog-content-modal-inner">
                    <div className='blog-modal-img-container'>
                        <img src={"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80"} alt="..." />
                    </div>
                    <div className='blog-modal-content-container'>
                        <h1>blog title</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
