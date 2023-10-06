import React from "react";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import {Link} from 'react-router-dom'
import Tag from '../assets/tag.svg'

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
          title: "10 React Tips for Beginners",
          description:"This article will give you 10 React tips to help you get started with the framework",
          date:"22 Sept 2023",
          topic: "React",
          url: "/posts/2",
        },
        {
          title: "How to Write Effective Google Search Ad Copy",
          description: "This article will teach you how to write effective Google Search Ad copy that will get people to click on your ads.",
          date:"22 Sept 2023",
          topic: "Google Ads",
          url: "/posts/3",
        },
        {
          title: "How to Use Google Analytics to Improve Your Website",
          description: "This article will teach you how to use Google Analytics to improve your website's performance and conversions.",
          date: "22 Sept 2023",
          topic: "Analytics",
          url: "/posts/4",
        },
        {
          title: "How to Track the Performance of Your Meta Ads",
          description: "This article will teach you how to track the performance of your Meta Ads to see what's working and what's not.",
          date: "22 Sept 2023",
          topic: "Meta Ads",
          url: "/posts/5",
        },
        {
          title: "How to Target Your Meta Ads",
          description: "This article will teach you how to target your Meta Ads to reach the right people",
          date: "22 Sept 2023",
          topic: "Meta Ads",
          url: "/posts/5",
        },
        {
          title: "10 SEO Mistakes to Avoid",
          description: "This article will help you avoid common SEO mistakes that can hurt your website's ranking",
          date: "22 Sept 2023",
          topic: "SEO",
          url: "/posts/5",
        },
        {
          title: "How to Use React Hooks",
          description: "This article will teach you how to use React Hooks, a new feature in React 16.8",
          date: "22 Sept 2023",
          topic: "React",
          url: "/posts/1",
        },
        {
          title: "How to Track the Performance of Your Google Search Ads",
          description: "This article will teach you how to track the performance of your Google Search Ads to see what's working and what's not",
          date: "22 Sept 2023",
          topic: "Google Ads",
          url: "/posts/5",
        },
      ];
    
    return (
        <>
        <Navbar />
        <div className='section'>
            <div className='container'>
                <h3 className="title-section">My <span>Blog</span></h3>
                <ul className='index-article'>
                {posts.map((post) => (
                    <li className='list-item' key={post.id}>
                        <div className='index-item-footer'>
                            <span id='date-post'>{post.date}</span>
                            <span className='topic-category'> <img src={Tag} alt="" /> {post.topic}</span>
                        </div>
                        <h2 className='aticle-title-in-index'>{post.title}</h2>
                        <p className='aticle-desc-in-index'>{post.description}</p>
                        <Link className="link-readmore" to={post.url}>Read more</Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        <Footer />
        </>
    )
}