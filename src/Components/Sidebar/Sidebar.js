import './Sidebar.css';
import { BiHomeCircle, BiHash, BiBookmark } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { RiFileList2Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import SidebarOption from '../SidebarOption/SidebarOption';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <a href="/">
        <AiOutlineTwitter size='35' className='sidebar__twitterIcon' />
      </a>

      {/* SidebarOption */}
      <SidebarOption active Icon ={BiHomeCircle} text='Página Inicial' />
      <SidebarOption Icon ={BiHash} text='Explorar' />
      <SidebarOption Icon ={IoNotificationsOutline} text='Notificações' />
      <SidebarOption Icon ={ FiMail } text='Mensagens' />
      <SidebarOption Icon ={ BiBookmark } text='Itens salvos' />
      <SidebarOption Icon ={ RiFileList2Line } text='Listas' />
      <SidebarOption Icon ={ BsPerson } text='Perfil' />
      <SidebarOption Icon ={ CgMoreO } text='Mais' />

      <Button 
        variant='outlined' 
        className='sidebar__tweet' 
        fullWidth
        >
        Tweetar
      </Button>

    </div>
  )
}

export default Sidebar;
