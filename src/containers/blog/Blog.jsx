import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 2, 2024" title="Unleashing Creativity: How GPT-3 is Revolutionizing Content Creation" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 2, 2024" title="The Future of AI: Exploring the Capabilities and Applications of GPT-3"/>
        <Article imgUrl={blog03} date="Sep 2, 2024" title="From Chatbots to Code: Real-World Uses of GPT-3"
 />
        <Article imgUrl={blog04} date="Sep 2, 2024" title="Enhancing Education with GPT-3: Transforming Learning and Teaching"
/>
        <Article imgUrl={blog05} date="Sep 2, 2024" title="Ethical AI: Navigating the Challenges and Opportunities of GPT-3"






/>
      </div>
    </div>
  </div>
);

export default Blog;

