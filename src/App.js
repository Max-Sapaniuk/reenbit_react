import "./App.scss"
import Header from "./components/Header/Header";
import Chats from "./components/Chats/Chats";
import Messages from "./components/Messages/Messages";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sortUsers} from "./store/mainSlice";
import Notification from "./components/common/Notification/Notification";

function App() {
    const selectedUserId = useSelector(state => state.main.selectedUserId)
    const dispatch = useDispatch()

    useEffect(() => {
        if (selectedUserId === null)
            dispatch(sortUsers())
    }, [dispatch, selectedUserId])

    return (
        <div className="app">
            <div className={`app__left ${selectedUserId === null ? '' : 'app__left_hidden'}`}>
                <Header/>
                <Chats/>
            </div>
            <div className={`app__right ${selectedUserId === null ? 'app__right_hidden' : ''}`}>
                <Messages/>
            </div>
            <div className="app__notification">
                <Notification/>
            </div>
        </div>
    );
}

export default App;
