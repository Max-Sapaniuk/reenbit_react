import "./Chats.scss"
import Profile from "../common/Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedUserId} from "../../store/mainSlice";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Chats() {
    const currentUserId = useSelector(state => state.main.currentUser.id)
    const selectedUserId = useSelector(state => state.main.selectedUserId)
    const allUsers = useSelector(state => state.main.allUsers)
    const allMessages = useSelector(state => state.main.allMessages)
    const searchField = useSelector(state => state.main.searchField)
    const dispatch = useDispatch()

    let allChats = allUsers.map((user) => {
        const messages = allMessages.find(value => value.users.includes(currentUserId) && value.users.includes(user.id))?.messages
        if (user.username.match(new RegExp(searchField, "i"))) {
            if (messages === undefined) {
                return (
                    <li className={`chats__list-item ${user.id === selectedUserId ? "chats__list-item_selected" : ""}`}
                        role="button"
                        tabIndex={0}
                        key={user.id}
                        onClick={() => {
                            dispatch(setSelectedUserId(user.id))
                        }}>
                        <div className="chats__list-profile">
                            <Profile avatar={user.avatar} isOnline={user.isOnline}/>
                        </div>
                        <div className="chats__list-data">
                            <div className="chats__list-name">{user.username}</div>
                            <div className="chats__list-message">Start a new dialogue now!</div>

                        </div>
                    </li>
                )
            }
            const lastMessageDate = new Date(messages[messages.length - 1].message.date)
            return (
                <li className={`chats__list-item ${user.id === selectedUserId ? "chats__list-item_selected" : ""}`}
                    role="button"
                    tabIndex={0}
                    key={user.id}
                    onClick={() => {
                        dispatch(setSelectedUserId(user.id))
                    }}>
                    <div className="chats__list-profile">
                        <Profile avatar={user.avatar} isOnline={user.isOnline}/>
                    </div>
                    <div className="chats__list-data">
                        <div className="chats__list-name">{user.username}</div>
                        <div
                            className="chats__list-message">{messages[messages.length - 1].senderId === currentUserId
                            ? <span><b>Me: </b>{messages[messages.length - 1].message.text}</span>
                            : messages[messages.length - 1].message.text}</div>
                    </div>
                    <div
                        className="chats__list-date">{`${monthNames[lastMessageDate.getMonth()]} ${lastMessageDate.getDate()}, ${lastMessageDate.getFullYear()}`}</div>
                </li>
            )
        } else return null
    })

    return (
        <div className="chats">
            <div className="chats__header">
                <h1>Chats</h1>
            </div>
            <ul className="chats__list">
                {
                    allChats.every((value) => value === null)
                        ?
                        <div className="chats__list-error">No chats were found!</div>
                        :
                        allChats
                }
            </ul>
        </div>
    )
}

export default Chats