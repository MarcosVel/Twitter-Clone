import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';
import { AiOutlineGif, AiOutlinePicture, AiOutlineSchedule } from "react-icons/ai";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useState } from 'react';

function TweetBox() {
  const [ tweetMessage, setTweetMessage ] = useState("");

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar className='post_avatar' src='https://instagram.fplu1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/124595979_190868415857383_3289167799779777978_n.jpg?tp=1&_nc_ht=instagram.fplu1-1.fna.fbcdn.net&_nc_ohc=BCjvgNi6cVUAX_nW16a&oh=903f4ec9746cb206afa6f79f4c59667c&oe=606ED973' />
          <div className='tweetBox_Body' >
            <input
              type="text"
              placeholder='O que está acontecendo?'
              onChange={ (e) => setTweetMessage(e.target.value) }
              value={ tweetMessage }
            />
            <div className='tweetBox_Footer'>
              <div className='tweetBox_divIcons'>
                <a href="/">
                  <AiOutlinePicture size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </a>
                <a href="/">
                  <AiOutlineGif size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </a>
                <a href="/">
                  <RiBarChartHorizontalFill size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </a>
                <a href="/">
                  <HiOutlineEmojiHappy size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </a>
                <a href="/">
                  <AiOutlineSchedule size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </a>
              </div>
              <Button className="tweetBox_tweetButton">Tweetar</Button>
            </div>
          </div>
        </div>
        {/* <input
            className='tweetBox_imageInput'
            placeholder='Optional: Enter image URL'
            type='text'
          /> */}
      </form>
    </div>
  );
}

export default TweetBox;
