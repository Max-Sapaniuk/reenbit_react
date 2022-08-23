import "./Header.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Profile from "../common/Profile/Profile";
import {useSelector} from "react-redux";
function Header() {
    const currentUser = useSelector(state => state.main.currentUser)
    return (
        <div className="header">
            <div className="header__container">
                <Profile avatar={currentUser.avatar} isOnline={true} className="header__profile"/>
                <div className="header__search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="header__search-icon"/>
                    <input type="text"
                           placeholder="Search or start new chat"
                           className="header__search-input"/>
                </div>
            </div>
        </div>
    )
}

export default Header