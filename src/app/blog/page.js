// src/app/blog/page.js

"use client"; // Gör detta till en klientkomponent för att använda hooks

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Importera Image-komponenten från Next.js

async function fetchPosts() {
  try {
    const res = await fetch('https://blogapijoy.azurewebsites.net/api/posts', {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Response not OK:', res.status, res.statusText);
      throw new Error('Failed to fetch posts');
    }

    const posts = await res.json();
    console.log("Fetched posts:", posts); // Bekräfta hämtade data
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    }
    loadPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('password', password);
    if (image) {
      formData.append('image', image);
    }

    try {
      const res = await fetch('https://blogapijoy.azurewebsites.net/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const newPost = await res.json();
        setPosts([newPost, ...posts]); // Lägg till det nya inlägget i listan
        setTitle('');
        setContent('');
        setPassword('');
        setImage(null);
        setError(null);
        alert('Post created successfully!');
      } else {
        const errorMessage = await res.text();
        setError(`Failed to create post: ${errorMessage}`);
      }
    } catch (err) {
      setError(`An error occurred: ${err.message}`);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Blog Posts</h1>

      {/* Formulär för att skapa ett nytt inlägg */}
      <div style={{ marginBottom: '30px' }}>
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Content:
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows="5"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Image (optional):
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ marginTop: '5px' }}
              />
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Create Post</button>
        </form>
      </div>

      {/* Lista med befintliga inlägg */}
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.imageUrl && (
                <Image
                  src={post.imageUrl} // Använd direkt URL till bilden från Blob Storage
                  alt={post.title}
                  width={400} // Specificera en bredd
                  height={300} // Specificera en höjd
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                />
              )}
              <small>Posted on: {new Date(post.createdAt).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogPage;
