import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    searchField: "",
    currentUser: {
        id: 0,
        avatar: './assets/images/avatar.jpg',
        username: 'Maks',
        isOnline: true,
    },
    selectedUserId: null,
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
        {
            id: 4,
            avatar: './assets/images/avatar4.jpg',
            username: 'Christian Bale',
            isOnline: true,
        },
        {
            id: 5,
            avatar: './assets/images/avatar5.jpg',
            username: 'Scarlett Johansson',
            isOnline: true,
        },
        {
            id: 6,
            avatar: './assets/images/avatar6.jpg',
            username: 'Leonardo DiCaprio',
            isOnline: true,
        },
        {
            id: 7,
            avatar: './assets/images/avatar7.jpg',
            username: 'Will Smith',
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
                            text: 'Duis cursus massa in neque auctor luctus. Cras elementum nibh sed sapien efficitur viverra. Fusce auctor neque ac est elementum, ut viverra metus suscipit. Cras vel gravida turpis, sed rhoncus lacus. Duis felis ante, varius in sem ultricies, ultricies pulvinar lectus. Nam non mauris id sapien vehicula posuere lacinia ut tellus. Cras sit amet fringilla quam. Nam auctor felis sit amet nisi placerat, a suscipit eros lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor augue, fringilla non libero non, consequat facilisis nunc. Aliquam dignissim lectus auctor enim elementum, vel eleifend est ullamcorper. Duis ante ipsum, volutpat posuere lacus vel, scelerisque convallis purus. Sed dictum sit amet ligula sit amet viverra. In maximus nunc vel libero aliquam aliquam. Nunc quis augue dolor. Nullam interdum purus sed nunc egestas, ut ullamcorper tellus dapibus.',
                            date: new Date('08/20/2022, 15:00').toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'Nunc ut mauris quam. Morbi sit amet arcu ligula. Pellentesque bibendum nisi in erat lacinia, a pretium felis dictum. Aliquam varius est a leo dictum bibendum. Nullam nec faucibus tortor, accumsan pretium risus. Cras auctor purus nisi, ornare congue ligula suscipit quis. Curabitur non libero molestie, malesuada mi sit amet, aliquet massa. Nulla id elit aliquet, malesuada arcu a, efficitur sem. Integer cursus leo at pellentesque tincidunt. Donec consectetur, nisl ac dictum rutrum, neque est malesuada ante, ut tincidunt orci ligula at diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et sapien quis velit rhoncus porttitor ac at arcu. Mauris mollis arcu ut mi dignissim, eu vulputate erat congue.',
                            date: new Date('08/20/2022, 16:00').toString(),
                        },
                },
                {
                    senderId: 1,
                    message:
                        {
                            text: 'Donec sit amet dui eu augue rutrum auctor eu vel nulla. Nulla vitae mattis mi. Integer congue dictum ullamcorper. Vivamus quis pulvinar nulla. Integer iaculis, magna sed posuere pretium, dolor purus auctor augue, vitae pharetra lorem elit a ligula. Aliquam gravida lacinia aliquam. Curabitur vel tincidunt mauris, nec lobortis libero. Cras euismod elit sed lacinia efficitur. Donec sodales felis at orci maximus blandit. Donec tortor mi, finibus in auctor vitae, tincidunt iaculis tortor. Praesent pretium tincidunt est eu feugiat. Praesent non dictum elit, eu mattis nisi.',
                            date: new Date('08/21/2022, 10:00').toString(),
                        },
                },
                {
                    senderId: 1,
                    message:
                        {
                            text: "Nullam viverra feugiat aliquet. Nulla tristique nisl ut vehicula euismod. Sed vulputate mauris tellus, ac laoreet nulla malesuada a. Suspendisse potenti. Praesent hendrerit, tellus vel varius gravida, elit sapien pretium odio, quis eleifend libero mauris vitae nisi. Praesent in hendrerit lorem, et lacinia turpis. Morbi imperdiet tempus aliquet. Integer eget orci congue, condimentum lectus ac, convallis mauris. Ut sed enim convallis, vehicula tortor sed, porta elit.",
                            date: new Date('08/21/2022, 11:00').toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: "Mauris mattis efficitur purus id dignissim. Mauris pellentesque pretium quam, et pharetra velit fermentum quis. Nam sem dui, facilisis in dui id, ultrices semper enim. Cras malesuada ante neque, at sagittis nulla malesuada vitae. Vivamus elementum metus purus, eget blandit dolor ultricies sit amet. Donec nec sapien id neque tincidunt iaculis. In a sapien nulla.",
                            date: new Date('08/21/2022, 12:00').toString(),
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
                            text: 'Nunc a nisi vulputate, placerat elit eu, condimentum odio.',
                            date: new Date('08/23/2022, 15:00').toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'Donec congue enim vel nunc varius, eget placerat enim euismod.',
                            date: new Date('08/23/2022, 15:05').toString(),
                        },
                },
                {
                    senderId: 1,
                    message:
                        {
                            text: 'Integer nec ex lobortis nunc auctor sagittis nec non urna.',
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
                            text: 'Phasellus vitae mi gravida, interdum magna at, convallis lectus.',
                            date: new Date('08/24/2022, 08:08').toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'Donec sit amet neque vel turpis posuere elementum.',
                            date: new Date('08/24/2022, 08:08:10').toString(),
                        },
                },
            ]
        },
        {
            users: [0, 4],
            messages: [
                {
                    senderId: 4,
                    message:
                        {
                            text: 'In sit amet justo cursus, tristique odio sit amet, cursus lacus.',
                            date: new Date('08/24/2022, 10:00').toString(),
                        },
                },
            ]
        },
        {
            users: [0, 6],
            messages: [
                {
                    senderId: 6,
                    message:
                        {
                            text: 'Integer ornare lectus sed sem lacinia dapibus.',
                            date: new Date('08/24/2022, 04:23').toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'Proin vel sapien vitae massa scelerisque sagittis.',
                            date: new Date('08/24/2022, 20:08').toString(),
                        },
                },
            ]
        },
        {
            users: [0, 7],
            messages: [
                {
                    senderId: 7,
                    message:
                        {
                            text: 'Donec dignissim nulla tempor, luctus lorem at, molestie odio.',
                            date: new Date('08/24/2022, 20:08').toString(),
                        },
                },
                {
                    senderId: 7,
                    message:
                        {
                            text: 'Sed dignissim nibh vitae odio rutrum dictum id sit amet massa.',
                            date: new Date('08/24/2022, 20:08').toString(),
                        },
                },
                {
                    senderId: 0,
                    message:
                        {
                            text: 'Duis eleifend dui sit amet aliquet dapibus.',
                            date: new Date('08/24/2022, 20:08').toString(),
                        },
                },
            ]
        },
    ],
    notification: {
        status: false,
        sender: null,
        type: 'success',
        title: '',
        body: ''
    }
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

function sortAllUsers(state) {
    state.allUsers
        .sort((user1, user2) => {
            const messages1 = state.allMessages.find(value => value.users.includes(state.currentUser.id) && value.users.includes(user1.id))?.messages
            const messages2 = state.allMessages.find(value => value.users.includes(state.currentUser.id) && value.users.includes(user2.id))?.messages
            if (messages1 === undefined) {
                return 1
            }
            if (messages2 === undefined) {
                return -1
            }
            const lastMessageDate1 = new Date(messages1[messages1.length - 1].message.date)
            const lastMessageDate2 = new Date(messages2[messages2.length - 1].message.date)
            if (lastMessageDate1 > lastMessageDate2) {
                return -1
            } else if (lastMessageDate1 < lastMessageDate2) {
                return 1
            }
            return 0
        })
}

function send(state, action) {
    const currentUser = action.payload.currentUser ?? state.currentUser.id
    const selectedUser = action.payload.selectedUser ?? state.selectedUserId
    let messages = state.allMessages.find(value => value.users.includes(currentUser) && value.users.includes(selectedUser))?.messages
    if (messages === undefined)
        state.allMessages.push({
            users: [currentUser, selectedUser],
            messages: [{
                senderId: action.payload.senderId ?? currentUser,
                message: {
                    text: action.payload.text,
                    date: action.payload.date,
                }
            }]
        })
    else
        messages.push({
            senderId: action.payload.senderId ?? currentUser,
            message: {
                text: action.payload.text,
                date: action.payload.date,
            }
        })
    sortAllUsers(state)
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setSearchField: (state, action) => {
            state.searchField = action.payload
        },
        setSelectedUserId: (state, action) => {
            state.selectedUserId = action.payload
        },
        sendMessage: send,
        sortUsers: sortAllUsers,
        removeNotification: state => {
            state.notification.status = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getResponseMessage.fulfilled, (state, action) => {
            const audio = new Audio('assets/audio/notification.mp3')
            audio.play();
            const sender = state.allUsers.find(user => user.id === action.payload.selectedUser).username
            state.notification = {
                status: true,
                sender: sender,
                type: 'success',
                title: 'Notification',
                body: `Yoy got new message from ${sender}!`
            }
            send(state, action)
        })
        builder.addCase(getResponseMessage.rejected, (state, action) => {
            state.notification = {
                status: true,
                type: 'error',
                title: 'Error',
                body: `Could not get data from server!`
            }
        })
    }
})

// Action creators are generated for each case reducer function
export const {setSelectedUserId, sendMessage, setSearchField, sortUsers, removeNotification} = mainSlice.actions

export default mainSlice.reducer