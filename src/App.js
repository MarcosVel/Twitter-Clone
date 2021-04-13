import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Widgets from './Components/Widgets/Widgets';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [ { user }, dispatch ] = useStateValue();

  return (
    <>
      { !user ? (
        <Login />
      ) : (
        <div className="app">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      ) }
    </>
  );
}

export default App;
