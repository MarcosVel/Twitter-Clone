import { Avatar } from '@material-ui/core';
import './Post.css';
import { GoVerified } from 'react-icons/go';
import { FaRegComment } from 'react-icons/fa';
import { BiRepost } from 'react-icons/bi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { FiShare } from 'react-icons/fi';

function Post({
  displayName,
  username,
  verified,
  // timestamp,
  text,
  image,
  avatar
}) {
  return (
    <section className='post'>
      <div className='post_avatar'>
        <Avatar src={avatar} />
      </div>
      <div className='post_body'>
        <div className='post_header'>
          <div className='post_headerText'>
            <h3>
              {displayName}
            </h3>
            <span className='post_headerSpecial'>
              { verified && <GoVerified className='post_badge' />}@{username}
            </span>
          </div>
          <div className='post_headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt='' />
        <div className='post_footer'>
          <FaRegComment size='17' />
          <BiRepost size='23' />
          <IoIosHeartEmpty size='20' />
          <FiShare size='17' />
        </div>
      </div>
    </section>
  );
}

export default Post;
