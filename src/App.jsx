import './App.css';
import Main from "./Components/Feed/Main/main"
import Login from "./Components/Log in/login"
import Sidebar from "./Components/Sidebar/sidebar"
import Trends from "./Components/Trends/trends"

function App() {
  return (
    <div className='container wrapper'>
      {/* <Login></Login> */}

      <Sidebar></Sidebar>
      
      <Main></Main>

      
      <Trends></Trends>
    </div>
  );
}

export default App;
