import './Feed.css';
import { WiStars } from "react-icons/wi";
import TweetBox from '../TweetBox/TweetBox';

function Feed() {
  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed__header'>
        <h2>Página Inicial</h2>
        <WiStars size='40' />
      </div>

      {/* TweetBox */}
      <TweetBox />
      
      {/* Posts */}
    </div>
  )
}

export default Feed;
