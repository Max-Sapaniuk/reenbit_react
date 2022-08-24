import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    searchField: "",
    currentUser: {
        id: 0,
        avatar: './assets/images/avatar.jpg',
        username: 'Maks',
        isOnline: true,
    },
    selectedUserId: 1,
    allUsers: [
        {
            id: 1,
            avatar: './assets/images/avatar1.jpg',
            username: 'Dwayne Johnson',
            isOnline: true,
        },
        {
            id: 2,
            avatar: './assets/images/avatar2.jpg',
            username: 'Gal Gadot',
            isOnline: false,
        },
        {
            id: 3,
            avatar: './assets/images/avatar3.jpg',
            username: 'Ryan Reynolds',
            isOnline: true,
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
                            date: new Date('08/20/2022, 15:00').toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'How are you?',
                            date: new Date('08/20/2022, 16:00').toString(),
                        },
                },
                {
                    senderId: 1,
                    message:
                        {
                            text: 'Hi',
                            date: new Date('08/21/2022, 10:00').toString(),
                        },
                },
                {
                    senderId: 1,
                    message:
                        {
                            text: "I'm fine",
                            date: new Date('08/21/2022, 11:00').toString(),
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
                            text: 'Hello',
                            date: new Date('08/23/2022, 15:00').toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'What\'s up?',
                            date: new Date('08/23/2022, 15:05').toString(),
                        },
                },
                {
                    senderId: 1,
                    message:
                        {
                            text: 'Fine',
                            date: new Date('08/23/2022, 15:06').toString(),
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
                            date: new Date('08/24/2022, 08:08').toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'How are you?',
                            date: new Date('08/24/2022, 08:08:10').toString(),
                        },
                },
            ]
        },
    ],
}

export const getResponseMessage = createAsyncThunk(
    'main/getResponseMessage',
    async (data) => {
        return {
            currentUser: data.currentUser,
            selectedUser: data.selectedUser,
            senderId: data.selectedUser,
            text: (await (await fetch('https://api.chucknorris.io/jokes/random')).json()).value,
            date: new Date().toString()
        }
    },
)

function send(state, action) {
    const currentUser = action.payload.currentUser ?? state.currentUser.id
    const selectedUser = action.payload.selectedUser ?? state.selectedUserId
    state.allMessages
        .find(value => value.users.includes(currentUser) && value.users.includes(selectedUser)).messages
        .push({
            senderId: action.payload.senderId ?? currentUser,
            message: {
                text: action.payload.text,
                date: action.payload.date,
            }
        })
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setSearchField: (state, action) => {
            state.searchField = action.payload
        },
        setSelectedUserId: (state, action) => {
            state.selectedUserId = action.payload.selectedUserId
        },
        sendMessage: send,
    },
    extraReducers: (builder) => {
        builder.addCase(getResponseMessage.fulfilled, (state, action) => {
            const audio = new Audio('assets/audio/notification.mp3')
            audio.play()
            send(state, action)
        })
        builder.addCase(getResponseMessage.rejected, (state, action) => {
            console.error('Something went wrong')
        })
    }
})

// Action creators are generated for each case reducer function
export const {setSelectedUserId, sendMessage, setSearchField} = mainSlice.actions

export default mainSlice.reducer