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
        <Avatar src='https://instagram.fplu1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/124595979_190868415857383_3289167799779777978_n.jpg?tp=1&_nc_ht=instagram.fplu1-1.fna.fbcdn.net&_nc_ohc=BCjvgNi6cVUAX_nW16a&oh=903f4ec9746cb206afa6f79f4c59667c&oe=606ED973' />
      </div>
      <div className='post_body'>
        <div className='post_header'>
          <div className='post_headerText'>
            <h3>
              Marcos Veloso
            </h3>
            <span className='post_headerSpecial'>
              <GoVerified className='post_badge' />@teste123
            </span>
          </div>
          <div className='post_headerDescription'>
            <p>I challenge you to build a Twitter Clone with React</p>
          </div>
        </div>
        <img src='https://pbs.twimg.com/media/Ev-jiMUWEAgLO5Y?format=jpg&name=medium' alt='noia' />
        <div className='post_footer'>
          <FaRegComment size='17' />
          <BiRepost size='22' />
          <IoIosHeartEmpty size='20' />
          <FiShare size='17' />
        </div>
      </div>
    </section>
  );
}

export default Post;
