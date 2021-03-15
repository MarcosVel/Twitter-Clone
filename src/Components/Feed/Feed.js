import './Feed.css';
import { WiStars } from "react-icons/wi";
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Posts/Post';
import { useState, useEffect } from 'react';
import db from '../../firebase';

function Feed() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <main className='feed'>
      <div className='feed__header'>
        <h2>Página Inicial</h2>
        <WiStars color='var(--twitter-dark)' size='40' />
      </div>

      <TweetBox />

      <div className="separator"></div>

      {posts.map(post => (
        <Post
          displayName={ post.displayName }
          username={ post.username }
          verified={ post.verified }
          text={ post.text }
          avatar={ post.avatar }
          image={ post.image }
        />
      )) }

    </main>
  )
}

export default Feed;
