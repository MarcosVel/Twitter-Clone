import { Avatar } from '@material-ui/core';
import './Post.css';
import { GoVerified } from 'react-icons/go';
import { FaRegComment } from 'react-icons/fa';
import { BiRepost } from 'react-icons/bi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { FiShare } from 'react-icons/fi';
import { forwardRef, useEffect, useState } from 'react';
import Comment from '../Comments/Comment';
import db from '../../firebase';

const Post = forwardRef(({
  postId,
  displayName,
  username,
  timestamp,
  verified,
  text,
  image,
  avatar
}, ref) => {

  const [ comments, setComments ] = useState([]);
  // const [ comment, setComment ] = useState('');

  useEffect(() => {
    if (postId) {
      db.collection('posts')
        .doc(postId)
        .collection('comments')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => ({
            id: doc.id,
            comment: doc.data(),
          })));
        });
    }

  }, [ postId ]);

  return (
    <>
      <section className='post' ref={ ref }>
        <div className='post_avatar'>
          <Avatar src={ avatar } />
        </div>
        <div className='post_body'>
          <div className='post_header'>
            <div className='post_headerText'>
              <h3 className='displayName'>
                { displayName }
              </h3>
              <span className='post_headerSpecial'>
                { verified && <GoVerified className='post_badge' /> }@{ username } · { new Date(timestamp?.toDate()).toDateString() }
              </span>
            </div>
            <div className='post_headerDescription'>
              <p>{ text }</p>
            </div>
          </div>
          { image != '' && (
            <img src={ image } alt='Imagem de um tweet' />
          ) }
          <div className='post_footer'>
            <FaRegComment size='17' />
            <BiRepost size='23' />
            <IoIosHeartEmpty size='20' />
            <FiShare size='17' />
          </div>
        </div>
      </section>

      {
        comments.map(({ id, comment }) => (
          <Comment
            key={ id }
            // commentId={ id }
            displayName={ comment.displayName }
            username={ comment.username }
            verified={ comment.verified }
            txtComment={ comment.txtComment }
            avatar={ comment.avatar }
            timestamp={ comment.timestamp }
          />
        ))
      }
      {/* <section className='post_comment'>
        <div className='post_avatar'>
          <Avatar src={ avatar } />
        </div>
        <div className='post_body'>
          <div className='post_headerText'>
            <h3>
              { displayName }
            </h3>
            <span className='post_headerSpecial'>
              { verified && <GoVerified className='post_badge' /> }@{ username } · { new Date(timestamp?.toDate()).toDateString() }
            </span>
          </div>
          <h2>
            Teste
          </h2>
        </div>
      </section> */}
    </>
  );
});

export default Post;
