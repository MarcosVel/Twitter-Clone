import { Avatar, Button, IconButton } from '@material-ui/core';
import { useState } from 'react';
import { AiOutlineGif, AiOutlinePicture, AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiBarChartHorizontalFill, RiSearchLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import db from '../../firebase';
import SimpleModal from '../../utils/Modal/SimpleModal';
import './TweetBox.css';
import firebase from 'firebase';
import { useStateValue } from '../../StateProvider';

function TweetBox() {
  const [ { user, additionalUserInfo }, dispatch ] = useStateValue();
  const [ tweetMessage, setTweetMessage ] = useState('');
  const [ tweetImage, setTweetImage ] = useState('');
  const [ open, setOpen ] = useState(false);

  const sendTweet = (e) => {
    // stops reload on submit
    e.preventDefault();

    db.collection('posts').add({
      displayName: user.displayName,
      username: additionalUserInfo.given_name,
      verified: user.emailVerified,
      text: tweetMessage,
      image: tweetImage,
      avatar: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // to clean
    setTweetMessage('');
    setTweetImage('');
  }

  // MODAL
  const handleOpenModal = () => {
    setOpen(true);
    // setTweetImage('');
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
          <section className="tweetBox_divModal">
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
            <div className='tweetBox_divShowGIF'>
              <img src={ tweetImage } className='tweetBox_Gif' />
            </div>
          </section>
        }
      >
      </SimpleModal>
    );
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar className='post_avatar' src={ user.photoURL } />
          <div className='tweetBox_Body' >
            <input
              type='text'
              placeholder='O que está acontecendo?'
              value={ tweetMessage }
              onChange={ (e) => setTweetMessage(e.target.value) }
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
              {
                (tweetMessage != '') || (tweetImage != '') ? (
                  <Button
                    className="tweetBox_tweetButton"
                    type='submit'
                    onClick={ sendTweet }
                  >Tweetar</Button>
                ) : (
                  <Button
                    className="tweetBox_tweetButton disabled"
                    type='button'
                    onClick={ !sendTweet }
                    disabled
                  >Tweetar</Button>
                )
              }
            </div>
          </div>
        </div>
      </form>
      { manipularModal() }
    </div>
  );
}

export default TweetBox;
