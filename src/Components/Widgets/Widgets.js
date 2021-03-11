import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed';
import { RiSearchLine } from 'react-icons/ri';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <RiSearchLine size='19' className='widgets_searchIcon' />
        <input placeholder='Buscar no Twitter' type='text' />
      </div>

      <div className='widgets_widgetContainer'>
        <h2>O que está acontecendo</h2>
      </div>
    </div>
  );
}

export default Widgets;
