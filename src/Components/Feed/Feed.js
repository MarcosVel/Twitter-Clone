import './Feed.css';
import { WiStars } from "react-icons/wi";
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Posts/Post';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data(),
      })));
    })
  }, []);

  return (
    <main className='feed'>
      <div className='feed__header'>
        <h2>Página Inicial</h2>
        <WiStars color='var(--twitter-dark)' size='40' />
      </div>

      <TweetBox />

      <div className="separator"></div>

      <FlipMove>
        { posts.map(({ id, post }) => (
          <Post
            key={ id }
            displayName={ post.displayName }
            username={ post.username }
            verified={ post.verified }
            text={ post.text }
            avatar={ post.avatar }
            image={ post.image }
            timestamp={ post.timestamp }
          />
        )) }
      </FlipMove>

    </main>
  )
}

export default Feed;
