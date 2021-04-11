import { Avatar, Button, IconButton } from '@material-ui/core';
import { useState } from 'react';
import { AiOutlineGif, AiOutlinePicture, AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiBarChartHorizontalFill, RiSearchLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { db } from '../../firebase';
import SimpleModal from '../../utils/Modal/SimpleModal';
import './TweetBox.css';
import firebase from 'firebase';

function TweetBox() {
  const [ tweetMessage, setTweetMessage ] = useState('');
  const [ tweetImage, setTweetImage ] = useState('');
  const [ open, setOpen ] = useState(false);

  const sendTweet = (e) => {
    // stops reload on submit
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Rafeh Qazi',
      username: 'cleverqazi',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://instagram.fplu1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/124595979_190868415857383_3289167799779777978_n.jpg?tp=1&_nc_ht=instagram.fplu1-1.fna.fbcdn.net&_nc_ohc=BCjvgNi6cVUAX_nW16a&oh=903f4ec9746cb206afa6f79f4c59667c&oe=606ED973',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // to clean
    setTweetMessage('');
    setTweetImage('');
  }

  // MODAL
  const handleOpenModal = () => {
    setOpen(true);
    setTweetImage('');
  }

  const handleCloseModal = () => {
    setOpen(false);
  }

  function manipularModal() {
    return (
      <SimpleModal
        open={ open }
        close={ () => {
          handleCloseModal();
        } }
        body={
          <div className='tweetBox_divImageInput'>
            <IconButton aria-label='Close' onClick={ () => handleCloseModal() }>
              <CgClose size='22' />
            </IconButton>
            <div className='tweetBox_divInput'>
              <RiSearchLine size='20' color='var(--placeholder-color)' aria-label='Colar um GIF' />
              <input
                placeholder='Cole aqui a URL do GIF'
                type='text'
                autoFocus
                value={ tweetImage }
                onChange={ (e) => setTweetImage(e.target.value) }
              />
            </div>
          </div>
        }
      >
      </SimpleModal>
    );
  }

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
                <a href="#">
                  <AiOutlinePicture size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </a>
                <button
                  type='button'
                  className='tweetBox_btnGif'
                  aria-label='Adicionar um GIF'
                  onClick={ handleOpenModal }
                >
                  <AiOutlineGif size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </button>
                <a href="#">
                  <RiBarChartHorizontalFill size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </a>
                <a href="#">
                  <HiOutlineEmojiHappy size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </a>
                <a href="#">
                  <AiOutlineSchedule size='24' color='var(--twitter-dark)' className='tweetBox_twitterIcon' />
                </a>
              </div>
              <Button
                className="tweetBox_tweetButton"
                type='submit'
                onClick={ sendTweet }
              >Tweetar</Button>
            </div>
          </div>
        </div>
      </form>
      { manipularModal() }
    </div>
  );
}

export default TweetBox;
