import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props! i feel like here it will be just one post not posts... its said alot in and out of class
  const { likePost, post } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {
      props.posts.map(eachPost => {
        return <Post key={eachPost.id} post={eachPost} likePost={likePost} numberOfLikes={eachPost.likes} />
      })
      }
      {/* Check the implementation of Post to see what props it requires! need a key identifier a single post like and a likes count*/}
    </div>
  );
};

export default Posts;
