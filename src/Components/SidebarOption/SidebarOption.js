import './SidebarOption.css';

function SidebarOption({ text, Icon }) {
  return (
    <div className='sidebarOption'>
      <Icon size='25' />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
