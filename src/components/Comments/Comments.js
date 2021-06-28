import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data need a key comment username and a set of txt off each individual comment mapped from comments */}
      {
        comments.map(comment => {
          return <Comment key={Comment.id} comment={comment} username={comment.username} text={comment.text} />
        })
      }
    </div>
  );
};

export default Comments;
