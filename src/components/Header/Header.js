import "./Header.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Profile from "../common/Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {setSearchField, setUser} from "../../store/mainSlice";
import {useEffect} from "react";
import {gapi} from "gapi-script";
import {GoogleLogin, GoogleLogout} from "react-google-login";

function Header() {
    const currentUser = useSelector(state => state.main.currentUser)
    const searchField = useSelector(state => state.main.searchField)
    const dispatch = useDispatch()

    const clientId = process.env.REACT_APP_CLIENT_ID;

    useEffect(() => {
        const initClient = () => {
            gapi.auth2.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    const onSuccess = (res) => {
        dispatch(setUser({
            id: 0,
            avatar: res.profileObj.imageUrl,
            username: res.profileObj.name,
            isOnline: true,
        }))
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };
    const logOut = () => {
        dispatch(setUser({
            id: 0,
            avatar: './assets/images/avatar.jpg',
            username: 'Maks',
            isOnline: true,
        }))
    };

    return (
        <div className="header">
            <div className="header__user">
                <div className="header__user-profile">
                    <Profile avatar={currentUser.avatar} isOnline={true}/>
                </div>
                {currentUser.avatar !== './assets/images/avatar.jpg' ?
                    <>
                        <div className="header__user-name">
                            {currentUser.username}
                        </div>
                        <div>
                            <GoogleLogout clientId={clientId}
                                          buttonText="Log out"
                                          onLogoutSuccess={logOut}
                                          className="header__user-button"
                            />
                        </div>
                    </>
                    :
                    <>
                        <div className="header__user-name"></div>
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign in with Google"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                            className="header__user-button"
                        />
                    </>
                }
            </div>
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
    )
}

export default Header