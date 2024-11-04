"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Modal from '../../components/Modal/Modal';
import Toast from '../../components/Toast/Toast';
import './blog.css';

// Resterande kod för BlogPage

// Resterande kod för BlogPage


async function fetchPosts() {
  try {
    const res = await fetch('https://blogapijoy.azurewebsites.net/api/posts', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

const BlogPage = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    }
    loadPosts();
  }, []);

  const handleDelete = async (password) => {
    if (!postToDelete) return;

    try {
      const res = await fetch(`https://blogapijoy.azurewebsites.net/api/posts/${postToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
      });

      if (res.ok) {
        setPosts(posts.filter(post => post.id !== postToDelete));
        setToastMessage("Post deleted successfully.");
      } else {
        const errorMessage = await res.text();
        alert(`Failed to delete post: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert(`An error occurred: ${error.message}`);
    } finally {
      setPostToDelete(null);
    }
  };

  const openDeleteModal = (postId) => {
    setPostToDelete(postId);
    setShowModal(true);
  };

  return (
    <div className="container">
      <h1 className="pageTitle">Blog Posts</h1>
      <button 
        onClick={() => router.push('/blog/create')}
        className="createButton"
      >
        Nytt
      </button>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="postItem">
              <h3 className="postTitle">{post.title}</h3>
              <p className="postContent">{post.content}</p>
              {post.imageUrl && (
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="postImage"
                />
              )}
              <small className="postDate">Posted on: {new Date(post.createdAt).toLocaleDateString()}</small>
              <button 
                onClick={() => openDeleteModal(post.id)}
                className="deleteButton"
              >
                Ta bort
              </button>
            </li>
          ))}
        </ul>
      )}

      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onSubmit={handleDelete} 
      />

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </div>
  );
};

export default BlogPage;
