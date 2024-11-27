import React, { useState } from 'react';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addPost = () => {
    if (title && content) {
      setPosts([...posts, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-form">
        <input 
          type="text" 
          placeholder="Post Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          placeholder="Post Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
