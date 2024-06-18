import './Feed.css';
import PostList from './PostList.jsx';
import FilterBar from './FilterBar.jsx';
import { useEffect, useState } from 'react';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const fetchPosts = async() => {
      try {
        const res = await fetch('https://fxsfrontend.fxstreet.workers.dev/');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
        setPosts('');
      }
    }
   
    fetchPosts();
  }, [])

  return (
    <section className="feed">
      <FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <PostList posts={posts} activeTab={activeTab} />
    </section>
  )
}

export default Feed;