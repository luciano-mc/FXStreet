import './Post.css';
import useDateFormat from '@/hooks/useDateFormat';
import DOMPurify from 'dompurify';
import Dropdown from '@/components/Dropdown/Dropdown';
import { LikeIcon, SaveIcon, FeedIcon, ClockIcon } from '@/assets/Icons.jsx';
import { useState } from 'react';

function Post({ post }) {
  const [postState, setPostState] = useState({
    liked: false,
    saved: false,
  })
  const { author, title, feed, subFeed, publicationTime, content } = post;
  const sanitizedContent = DOMPurify.sanitize(content);

  const handleClick = (type) => {
    setPostState((prevState) => ({ ...prevState, [type]: !prevState[type] }));
  }

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header-feed-container">
          <span className="post__header-feed">
            <FeedIcon /> {feed}
          </span>
          <span className="post__header-subfeed">{subFeed}</span>
        </div>
        <div className="post__header-date">
          <ClockIcon />
          {useDateFormat(publicationTime)}
        </div>
      </div>

      <div className="post__head-body">
        <div className="post__author">
          <h5>{author.name} | {author.companyName}</h5>
        </div>
        <div className="post__logo-container">
          <img src={author.imageUrl} alt="Author Image" />
        </div>
        <div className="post__title">
          <h3>{title}</h3>
        </div>
      </div>

      <div className="post__body">
        <p dangerouslySetInnerHTML={{ __html: sanitizedContent }}></p>
      </div>

      <div className="post__footer">
        <div className={`post__footer-option ${postState.liked ? 'liked' : ''}`} onClick={() => handleClick('liked')} >
          <LikeIcon />
          {postState.liked ? 'Liked!' : 'Like'}
        </div>
        <div className={`post__footer-option ${postState.saved ? 'saved' : ''}`} onClick={() => handleClick('saved')} >
          <SaveIcon />
          {postState.saved ? 'Saved!' : 'Save'}
        </div>
        <div className="post__footer-option post__footer-option--last">
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default Post;