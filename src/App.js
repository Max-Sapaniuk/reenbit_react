import "./App.scss"
import Header from "./components/Header/Header";
import Chats from "./components/Chats/Chats";
import Messages from "./components/Messages/Messages";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sortUsers} from "./store/mainSlice";

function App() {
    const selectedUserId = useSelector(state => state.main.selectedUserId)
    const dispatch = useDispatch()

    useEffect(() => {
        if (selectedUserId === null) {
            dispatch(sortUsers())
        }
    })
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
