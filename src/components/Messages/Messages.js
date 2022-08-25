import "./Messages.scss"
import Profile from "../common/Profile/Profile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Incoming from "./Incoming/Incoming";
import Outcoming from "./Outcoming/Outcoming";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from 'formik';
import {getResponseMessage, sendMessage} from "../../store/mainSlice";
import {useEffect, useRef} from "react";

const validate = values => {
    const errors = {};
    if (!values.message) {
        errors.message = 'Required!';
    }
    return errors;
};

function Messages() {
    const currentUserId = useSelector(state => state.main.currentUser.id)
    const selectedUserId = useSelector(state => state.main.selectedUserId)
    const selectedUser = useSelector(state => state.main.allUsers.find((element) => element.id === selectedUserId))
    const allMessages = useSelector(state => state.main.allMessages)
    const dispatch = useDispatch()
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    const formik = useFormik({
        initialValues: JSON.parse(localStorage.getItem('formikMessage')) ?? {
            message: '',
        },
        enableReinitialize: true,
        validate,
        onSubmit: async (values, {resetForm}) => {
            await dispatch(sendMessage({
                text: values.message,
                date: new Date().toString()
            }))
            localStorage.removeItem('formikMessage')
            formik.initialValues = {
                message: '',
            }
            resetForm()
            setTimeout(async () => {
                dispatch(getResponseMessage({
                    currentUser: currentUserId,
                    selectedUser: selectedUserId,
                }))
            }, 2000)
            // }, Math.random() * (15000 - 10000) + 10000)
        },
    });

    const messages = allMessages.find(value => value.users.includes(currentUserId) && value.users.includes(selectedUserId))?.messages

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'auto'});
    }, [messages])

    useEffect(() => {
        inputRef.current?.focus()
    }, [selectedUserId])

    if (selectedUserId === null)
        return null

    return (
        <div className="messages">
            <div className="messages__header">
                <Profile avatar={selectedUser.avatar} isOnline={selectedUser.isOnline}
                         className="messages__header-profile"/>
                <div className="messages__header-name">{selectedUser.username}</div>
            </div>
            <div className="messages__body">
                {
                    messages !== undefined ?
                        messages.map((value, index) => {
                            if (value.senderId === currentUserId)
                                return (
                                    <Outcoming message={value.message.text}
                                               date={new Date(value.message.date).toLocaleString()} key={index}/>
                                )
                            else
                                return (
                                    <Incoming avatar={selectedUser.avatar} message={value.message.text}
                                              date={new Date(value.message.date).toLocaleString()} key={index}/>
                                )
                        })
                        : <div className="messages__body-start">Say hello to {selectedUser.username}!</div>
                }
                <div ref={bottomRef}/>
            </div>
            <div className="messages__footer">
                <form onSubmit={formik.handleSubmit} className="messages__footer-form">
                    <input type="text"
                           name="message"
                           onChange={(event) => {
                               formik.handleChange(event)
                               localStorage.setItem('formikMessage', JSON.stringify({
                                   ...formik.values,
                                   message: event.target.value
                               }))
                           }}
                           value={formik.values.message}
                           placeholder="Type your message"
                           className="messages__footer-input"
                           ref={inputRef}
                    />
                    {formik.errors.message ?
                        <div className="messages__footer-error">{formik.errors.message}</div> : null}
                    <button type="submit" className="messages__footer-button"><FontAwesomeIcon icon={faPaperPlane}
                                                                                               className="messages__footer-icon"/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Messages
