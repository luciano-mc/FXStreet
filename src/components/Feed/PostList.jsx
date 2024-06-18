import Post from '@/components/Post/Post.jsx';

function PostList ({ posts, activeTab }) {
  let filteredPosts = [];

  if (activeTab === 1) {
    filteredPosts = posts
      .sort((a, b) => new Date(b.publicationTime) - new Date(a.publicationTime))
      .slice(0, 2);
  } else if (activeTab === 2) {
    filteredPosts = posts
      .filter(post => post.isPopular)
      .slice(0, 1);
  }

  return (
    <>
      {posts && filteredPosts.map((post, index) => (
        <Post post={post} key={index} />
       ))
      }
    </>
  );
};

export default PostList;
