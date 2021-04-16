import { Avatar, Button } from '@material-ui/core';
import { AiOutlineTwitter } from "react-icons/ai";
import { BiBookmark, BiHash, BiHomeCircle } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { GiFeather } from 'react-icons/gi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFileList2Line } from "react-icons/ri";
import { auth } from '../../firebase';
import { initialState } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import SidebarOption from '../SidebarOption/SidebarOption';
import './Sidebar.css';

function Sidebar() {
  const [ { user, additionalUserInfo }, dispatch ] = useStateValue();

  // const logout = () => async response => {
  //   try {
  //     await auth.signOut()
  //       .then(() => {
  //         // console.log('User Logged Out!')
  //         dispatch({
  //           type: initialState
  //         });
  //         window.location='/';
  //       })
  //       .catch((error) => alert(error.message));
  //   } catch (err) {
  //     console.log('err:', err);
  //   }
  // }

  const logout = () => response => {
    auth.signOut()
      .then(() => {
        // console.log('User Logged Out!')
        dispatch({
          type: initialState
        });
        window.location = '/';
      })
      .catch((error) => alert(error.message));
  }

  function focusInput(e) {
    e.preventDefault();
    document.getElementById('tweetBox_inputPost').focus()
  }

  return (
    <div className="sidebar">
      <div className="sidebar_nav">
        {/* Twitter Icon */ }
        <a href="#" >
          <AiOutlineTwitter size='35' className='sidebar__twitterIcon' />
        </a>

        {/* SidebarOption */ }
        <SidebarOption active Icon={ BiHomeCircle } text='Página Inicial' />
        <SidebarOption Icon={ BiHash } text='Explorar' />
        <SidebarOption Icon={ IoNotificationsOutline } text='Notificações' />
        <SidebarOption Icon={ FiMail } text='Mensagens' />
        <SidebarOption Icon={ BiBookmark } text='Itens salvos' />
        <SidebarOption Icon={ RiFileList2Line } text='Listas' />
        <SidebarOption Icon={ BsPerson } text='Perfil' />
        <SidebarOption Icon={ CgMoreO } text='Mais' />

        <Button
          variant='outlined'
          className='sidebar__tweet'
          type='button'
          fullWidth
          onClick={ focusInput }
        >
          <GiFeather size='25' />
          <p>Tweetar</p>
        </Button>
      </div>

      <div className='sidebar_user' onClick={ logout() } title='Fazer LogOut'>
        <div className='sidebar_userInfo'>
          <Avatar className='sidebar_avatar' src={ user.photoURL } />
          <div className='sidebar_userInfoTexts'>
            <h3 className='displayName'>{ user.displayName }</h3>
            <span className='post_headerSpecial'>@{ additionalUserInfo.given_name }</span>
          </div>
        </div>
        <HiOutlineDotsHorizontal size='19' />
      </div>

    </div>
  )
}

export default Sidebar;
