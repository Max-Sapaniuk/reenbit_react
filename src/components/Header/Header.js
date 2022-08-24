import "./Header.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Profile from "../common/Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {setSearchField} from "../../store/mainSlice";

function Header() {
    const currentUser = useSelector(state => state.main.currentUser)
    const searchField = useSelector(state => state.main.searchField)
    const dispatch = useDispatch()

    return (
        <div className="header">
            <div className="header__container">
                <Profile avatar={currentUser.avatar} isOnline={true} className="header__profile"/>
                <div className="header__search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="header__search-icon"/>
                    <input type="text"
                           name="search"
                           onChange={(event) => dispatch(setSearchField(event.target.value))}
                           value={searchField}
                           placeholder="Search or start new chat"
                           className="header__search-input"/>
                </div>
            </div>
        </div>
    )
}

export default Header