import './Feed.css';
import { WiStars } from "react-icons/wi";
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Posts/Post';

function Feed() {
  return (
    <main className='feed'>
      {/* Header */}
      <div className='feed__header'>
        <h2>Página Inicial</h2>
        <WiStars color='var(--twitter-dark)' size='40' />
      </div>

      {/* TweetBox */}
      <TweetBox />
      
      <div className="separator"></div>

      {/* Posts */}
      <Post />
    </main>
  )
}

export default Feed;
