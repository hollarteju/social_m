import './App.css';
import Messages from './component/Messages/Messages';
import Navbar from "./component/Navbar/Navbar";
import Story from "./component/Story/Story";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {

return (
  
    <div className="main">
        <Navbar/>
      <div className='container'>
        <Sidebar/>
        <Story />
        <Messages/>
      </div>
    </div>
   
  );
}

export default App;
