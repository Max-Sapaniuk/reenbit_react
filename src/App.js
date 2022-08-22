import "./App.scss"
import Header from "./components/Header/Header";
import Chats from "./components/Chats/Chats";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="app">
        <div className="app__left">
            <Header/>
            <Chats/>
        </div>
        <div className="app__right">
            <Messages/>
        </div>
    </div>
  );
}

export default App;
