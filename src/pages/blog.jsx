import React from "react";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import {Link} from 'react-router-dom'

export default function Blog (){
    const posts = [
        {
          title: "How to Rank Your Website on Google in 2023",
          description: "This article will teach you how to rank your website on Google in 2023 by following the latest SEO best practices.",
          date: "22 Sept 2023",
          topic: "SEO",
          url: "/posts/1",
        },
        {
          title: "Post 2",
          url: "/posts/2",
        },
        {
          title: "Post 3",
          url: "/posts/3",
        },
      ];
    
    return (
        <>
        <Navbar />
        <div className='section'>
            <div className='container'>
                <ul className='index-article'>
                {posts.map((post) => (
                    <li className='list-item' key={post.id}>
                        <div className='index-item-footer'>
                            <span id='date-post'>{post.date}</span>
                            <span className='topic-category'>{post.topic}</span>
                        </div>
                        <h2 className='aticle-title-in-index'>{post.title}</h2>
                        <p className='aticle-desc-in-index'>{post.description}</p>
                        <Link to={post.url}>Read more</Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        <Footer />
        </>
    )
}