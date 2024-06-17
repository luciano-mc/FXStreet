import './Feed.css';
import Post from '../Post/Post.jsx';
import { FilterIcon } from '../../assets/Icons.jsx';
import { useEffect, useState } from 'react';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const fetchPosts = async() => {
      try {
        const res = await fetch('https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c');
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
      <div className="bar">
        <ul className="sort-filters-container">
          <li><button className={`sort-filter ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)} >Latest</button></li>
          <li><button className={`sort-filter ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)} >Popular</button></li>
        </ul>
        <div className="filters">
          <div>
            <div className="filter__mobile">
              <FilterIcon />  
            </div>
            <div className="filter__desktop">
              <span>Show:</span>
              <select className="filter__desktop-select">
                <option value="">All</option>
                <option value="Latest">Latest</option>
                <option value="Popular">Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      { posts ?
        posts.map(() => {
          if ( activeTab === 1 ) {
            return posts.sort((a, b) => new Date(b.publicationTime) - new Date(a.publicationTime)).map((post, index) => (
              <Post post={post} key={index} />
            ))
          } else if ( activeTab === 2) {
            return posts.filter( post => post.isPopular ).map((post, index) => (
              <Post post={post} key={index} />
            ))
          }
        })
        :
        <div>Lo sentimos, no hay posts. Intenta de nuevo más tarde</div>
      }
    </section>
  )
}

export default Feed;