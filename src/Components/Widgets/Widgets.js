import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed
} from 'react-twitter-embed';
import { RiSearchLine } from 'react-icons/ri';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <RiSearchLine size='19' color='var(--placeholder-color)' className='widgets_searchIcon' />
        <input placeholder='Buscar no Twitter' type='text' />
      </div>

      <div className='widgets_widgetContainer'>
        <h2>O que está acontecendo</h2>
        <TwitterTweetEmbed
          className='widgets_tweetEmbed'
          tweetId={ '1342965469481992193' }
          options={{
            theme: 'dark',
          }}
        />

        <TwitterTimelineEmbed
          sourceType="url"
          url="https://twitter.com/UOLNoticias"
          theme="dark"
          noScrollbar
          lang="pt-br"
          options={{
            tweetLimit: 3,
            height: 400,
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
