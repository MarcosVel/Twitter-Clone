import './Feed.css';
import { WiStars } from "react-icons/wi";
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Posts/Post';
import { useState, useEffect } from 'react';
import db from '../../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);
  
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
          displayName='Marcos Veloso'
          username='marquin'
          verified={true}
          text='YOOO working'
          avatar='https://instagram.fplu1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/124595979_190868415857383_3289167799779777978_n.jpg?tp=1&_nc_ht=instagram.fplu1-1.fna.fbcdn.net&_nc_ohc=BCjvgNi6cVUAX_nW16a&oh=903f4ec9746cb206afa6f79f4c59667c&oe=606ED973'
          image='https://i.pinimg.com/564x/de/f6/96/def69643889ee29e232637646e839064.jpg'
        />
      ))}
      
    </main>
  )
}

export default Feed;
