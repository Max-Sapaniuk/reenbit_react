import "./Chats.scss"
import Profile from "../common/Profile/Profile";
import avatar1 from "./avatar1.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.jpg";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Chats() {
    const date = new Date()
    return (
        <div className="chats">
            <div className="chats__container">
                <div className="chats__header">
                    <h1>Chats</h1>
                </div>
                <ul className="chats__list">
                    <li className="chats__list-item" role="button" tabIndex={0}>
                        <Profile avatar={avatar1} isOnline={true} className="chats__list-profile"/>
                        <div className="chats__list-data">

                            <div className="chats__list-name">Dwayne Johnson</div>
                            <div className="chats__list-message">Hello</div>
                        </div>
                        <div
                            className="chats__list-date">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
                    </li>
                    <li className="chats__list-item" role="button" tabIndex={0}>
                        <Profile avatar={avatar2} isOnline={true} className="chats__list-profile"/>
                        <div className="chats__list-data">
                            <div className="chats__list-name">Gal Gadot</div>
                            <div className="chats__list-message">Hi</div>
                        </div>
                        <div
                            className="chats__list-date">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
                    </li>
                    <li className="chats__list-item" role="button" tabIndex={0}>
                        <Profile avatar={avatar3} isOnline={true} className="chats__list-profile"/>
                        <div className="chats__list-data">

                            <div className="chats__list-name">Ryan Reynolds</div>
                            <div className="chats__list-message">Hello!!!</div>
                        </div>
                        <div
                            className="chats__list-date">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
                    </li>
                    <li className="chats__list-item" role="button" tabIndex={0}>
                        <Profile avatar={avatar3} isOnline={true} className="chats__list-profile"/>
                        <div className="chats__list-data">

                            <div className="chats__list-name">Ryan Reynolds</div>
                            <div className="chats__list-message">Hello!!!</div>
                        </div>
                        <div
                            className="chats__list-date">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
                    </li>
                    <li className="chats__list-item" role="button" tabIndex={0}>
                        <Profile avatar={avatar3} isOnline={true} className="chats__list-profile"/>
                        <div className="chats__list-data">

                            <div className="chats__list-name">Ryan Reynolds</div>
                            <div className="chats__list-message">Hello!!!</div>
                        </div>
                        <div
                            className="chats__list-date">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
                    </li>
                    <li className="chats__list-item" role="button" tabIndex={0}>
                        <Profile avatar={avatar3} isOnline={true} className="chats__list-profile"/>
                        <div className="chats__list-data">

                            <div className="chats__list-name">Ryan Reynolds</div>
                            <div className="chats__list-message">Hello!!!</div>
                        </div>
                        <div
                            className="chats__list-date">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
                    </li>
                    <li className="chats__list-item" role="button" tabIndex={0}>
                        <Profile avatar={avatar3} isOnline={true} className="chats__list-profile"/>
                        <div className="chats__list-data">

                            <div className="chats__list-name">Ryan Reynolds</div>
                            <div className="chats__list-message">Hello!!!</div>
                        </div>
                        <div
                            className="chats__list-date">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Chats