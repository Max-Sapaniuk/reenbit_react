import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: {
        id: 0,
        avatar: './assets/images/avatar.jpg',
        username: 'Maks',
        isOnline: true,
        // messages: [
        //     {
        //         receiverID: 1,
        //         message: [
        //             {
        //                 text: 'Hello',
        //                 date: new Date().toString(),
        //             },
        //         ]
        //     }
        // ]
    },
    selectedUserId: 1,
    allUsers: [
        {
            id: 1,
            avatar: './assets/images/avatar1.jpg',
            username: 'Dwayne Johnson',
            isOnline: true,
            // messages: [
            //     {
            //         receiverID: 0,
            //         message: [
            //             {
            //                 text: 'Hi',
            //                 date: new Date().toString(),
            //             },
            //             {
            //                 text: 'How are you?',
            //                 date: new Date().toString(),
            //             },
            //             {
            //                 text: 'COOOL!',
            //                 date: new Date().toString(),
            //             },
            //         ]
            //     },
            //     {
            //         receiverID: 2,
            //         message: [
            //             {
            //                 text: 'Hi',
            //                 date: new Date().toString(),
            //             },
            //             {
            //                 text: 'How are you?',
            //                 date: new Date().toString(),
            //             },
            //             {
            //                 text: 'COOOL!',
            //                 date: new Date().toString(),
            //             },
            //         ]
            //     },
            // ]
        },
        {
            id: 2,
            avatar: './assets/images/avatar2.jpg',
            username: 'Gal Gadot',
            isOnline: false,
            // messages: [
            //     {
            //         receiverID: 0,
            //         message: [
            //             {
            //                 text: 'Hi',
            //                 date: new Date().toString(),
            //             },
            //             {
            //                 text: 'wqd',
            //                 date: new Date().toString(),
            //             },
            //         ]
            //     }
            // ]
        },
        {
            id: 3,
            avatar: './assets/images/avatar3.jpg',
            username: 'Ryan Reynolds',
            isOnline: true,
            // messages: [
            //     {
            //         receiverID: 0,
            //         message: [
            //             {
            //                 text: 'Hi',
            //                 date: new Date().toString(),
            //             },
            //             {
            //                 text: 'How are you?',
            //                 date: new Date().toString(),
            //             },
            //         ]
            //     }
            // ]
        },
    ],
    allMessages: [
        {
            users: [0, 1],
            messages: [
                {
                    senderId: 0,
                    message:
                        {
                            text: 'Hi',
                            date: new Date().toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'How are you?',
                            date: new Date().toString(),
                        },
                },
                {
                    senderId: 1,
                    message:
                        {
                            text: 'Hi',
                            date: new Date().toString(),
                        },
                },
                {
                    senderId: 1,
                    message:
                        {
                            text: "I'm fine, thank you",
                            date: new Date().toString(),
                        },
                },
            ]
        },
        {
            users: [0, 2],
            messages: [
                {
                    senderId: 0,
                    message:
                        {
                            text: 'Hi',
                            date: new Date().toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'How are you?',
                            date: new Date().toString(),
                        },
                },
                {
                    senderId: 1,
                    message:
                        {
                            text: 'Hi',
                            date: new Date().toString(),
                        },
                },
            ]
        },
        {
            users: [0, 3],
            messages: [
                {
                    senderId: 0,
                    message:
                        {
                            text: 'Hi',
                            date: new Date().toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'How are you?',
                            date: new Date().toString(),
                        },
                },
            ]
        },
    ]
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        // setCurrentUser: (state, action) => {
        //     state.currentUser = Number.isInteger(action.payload.userId) ? action.payload.userId : 0
        // },
        setSelectedUserId: (state, action) => {
            state.selectedUserId = action.payload.selectedUserId
        },
        sendMessage: (state, action) => {
            state.allMessages
                .find(value => value.users.includes(state.currentUser.id) && value.users.includes(state.selectedUserId)).messages
                .push({
                    senderId: state.currentUser.id,
                    message: {
                        text: action.payload.text,
                        date: action.payload.date,
                    }
                })
        },
    },
})

// Action creators are generated for each case reducer function
export const {setSelectedUserId, sendMessage} = mainSlice.actions

export default mainSlice.reducer