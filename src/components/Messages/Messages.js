import "./Messages.scss"
import Profile from "../common/Profile/Profile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Incoming from "./Incoming/Incoming";
import Outcoming from "./Outcoming/Outcoming";
import {useDispatch, useSelector} from "react-redux";
import { useFormik } from 'formik';
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
    const messages = allMessages.find(value => value.users.includes(currentUserId) && value.users.includes(selectedUserId)).messages
    const dispatch = useDispatch()
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'auto'});
    })

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validate,
        onSubmit: async (values, {resetForm}) => {
            await dispatch(sendMessage({
                text: values.message,
                date: new Date().toString()
            }))
            resetForm()
            await setTimeout(async () => {
                await dispatch(getResponseMessage({
                    currentUser: currentUserId,
                    selectedUser: selectedUserId,
                }))
            }, Math.random() * (15000 - 10000) + 10000)
        },
    });

    return (
        <div className="messages">
            <div className="messages__header">
                <Profile avatar={selectedUser.avatar} isOnline={selectedUser.isOnline}
                         className="messages__header-profile"/>
                <div className="messages__header-name">{selectedUser.username}</div>
            </div>
            <div className="messages__body">
                {
                    messages.map((value, index) => {
                        if (value.senderId === currentUserId)
                            return (
                                <Outcoming message={value.message.text} date={new Date(value.message.date).toLocaleString()} key={index}/>
                            )
                        else
                            return (
                                <Incoming avatar={selectedUser.avatar} message={value.message.text} date={new Date(value.message.date).toLocaleString()} key={index}/>
                            )
                    })
                }
                <div ref={bottomRef} />
            </div>
            <div className="messages__footer">
                <form onSubmit={formik.handleSubmit} className="messages__footer-form">
                    <input type="text"
                           name="message"
                           onChange={formik.handleChange}
                           value={formik.values.message}
                           placeholder="Type your message"
                           className="messages__footer-input"/>
                    {formik.errors.message ? <div className="messages__footer-error">{formik.errors.message}</div> : null}
                    <button type="submit" className="messages__footer-button"><FontAwesomeIcon icon={faPaperPlane} className="messages__footer-icon"/></button>
                </form>
            </div>
        </div>
    )
}

export default Messages
