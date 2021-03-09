import { Avatar } from '@material-ui/core';
import './Post.css';
import { GoVerified } from 'react-icons/go';

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
        <div className='post_body'>
          <div className='post_header'>
            <div className='post_headerText'>
              <h3>
                Rafeh Qazi <span><GoVerified className='post_badge' /> @teste123</span>
              </h3>
            </div>
            <div className='post_headerDescription'>
              <p>I challenge you to build a Twitter Clone with React</p>
            </div>
          </div>
          <img src='https://pbs.twimg.com/media/Ev-jiMUWEAgLO5Y?format=jpg&name=medium' alt='noia' />
        </div>
      </div>
    </section>
  );
}

export default Post;
