import './App.css';
import Main from "./Components/Feed/Main/main"
import Login from "./Components/Log in/login"
import Sidebar from "./Components/Sidebar/sidebar"
import Trends from "./Components/Trends/trends"

function App() {
  return (
    <>
      <Login></Login>

      <Sidebar></Sidebar>
      
      <Main></Main>

      <Trends></Trends>
    </>
  );
}

export default App;
