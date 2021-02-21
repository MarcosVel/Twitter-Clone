import './Sidebar.css';
import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
      <BiHomeCircle size='25' />
      <AiOutlineTwitter size='25' />
    </div>
  )
}

export default Sidebar;
