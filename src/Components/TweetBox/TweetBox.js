import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';

function TweetBox() {
  return (
      <div className="tweetBox">
        <form>
          <div className="tweetBox_input">
            <Avatar className='post_avatar' src='https://instagram.fplu1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/124595979_190868415857383_3289167799779777978_n.jpg?tp=1&_nc_ht=instagram.fplu1-1.fna.fbcdn.net&_nc_ohc=BCjvgNi6cVUAX_nW16a&oh=903f4ec9746cb206afa6f79f4c59667c&oe=606ED973' />
            <input type="text" placeholder='O que está acontecendo?' />
          </div>
          <input
            className='tweetBox_imageInput'
            placeholder='Optional: Enter image URL'
            type='text'
          />
          <Button className="tweetBox_tweetButton">Tweetar</Button>
        </form>
      </div>
  );
}

export default TweetBox;
