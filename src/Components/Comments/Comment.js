import { Avatar } from '@material-ui/core';
import { forwardRef } from 'react';
import { GoVerified } from 'react-icons/go';
import './Comment.css';

const Comment = forwardRef(({
  // commentId,
  displayName,
  username,
  timestamp,
  verified,
  txtComment,
  avatar
}, ref) => {

  return (
    <section className='post_comment' ref={ ref }>
      <div className='post_avatar'>
        <Avatar src={ avatar } />
      </div>
      <div className='post_body'>
        <div className='post_headerText'>
          <h3 className='displayName'>
            { displayName }
          </h3>
          <span className='post_headerSpecial'>
            { verified && <GoVerified className='post_badge' /> }@{ username } · { new Date(timestamp?.toDate()).toDateString() }
          </span>
        </div>
        <div className='post_headerDescription'>
          <span className='post_headerSpecial'>Em resposta a</span>
          <p>{ txtComment }</p>
        </div>
      </div>
    </section>
  );
});

export default Comment;
