import firebase from '../services/firebase';

const db = firebase.firestore();

export default {
    getListContacts: async (userId) => {
        let list = [];
        let contacts = await db.collection('users').get();

        contacts.forEach(contact => {
            let data = contact.data();
            if (contact.id !== userId) {
                list.push({
                    id: contact.id,
                    name: data.name,
                    avatar: data.avatar
                })
            }
        })
        return list;
    },
    addNewChat: async (user, userSecond) => {
        const addItemChat = async (user, userSecond) => {
            let newChat = await db.collection('chats').add({
                messages: [],
                users: [user.id, userSecond.id]
            })
    
            await db.collection('users').doc(user.id).update({
                chats: firebase.firestore.FieldValue.arrayUnion({
                    chatId: newChat.id,
                    title: userSecond.name,
                    image: userSecond.avatar,
                    with: userSecond.id,
                })
            })
            await db.collection('users').doc(userSecond.id).update({
                chats: firebase.firestore.FieldValue.arrayUnion({
                    chatId: newChat.id,
                    title: user.name,
                    image: user.avatar,
                    with: user.id,
                })
            })
        }

        let userData = await db.collection("users").doc(user.id).get();

        if (!userData.data().chats) {
            addItemChat(user, userSecond)
        } else {
            let exists = userData.data().chats.map(item => item.id === item.userSecond)
            if (!exists) {
                addItemChat(user, userSecond)
            }
        }
    },
    onChatList: (userId, setChatList) => {
        return db.collection('users').doc(userId).onSnapshot((doc) => {
            if (doc.exists) {
                let data = doc.data();
                if (data.chats) {
                    setChatList(data.chats);
                }
            }
        });
    },
    onChatContent: async (chatId, setList) => {
        return db.collection('chats').doc(chatId).onSnapshot((doc) => {
            if (doc.exists) {
                let data = doc.data();
                setList(data.messages)
            }
        })
    },
    sendMessage: async (chatData, userId, type, body) => {
        db.collection('chats').doc(chatData.id).update({
            messages: firebase.firestore.FieldValue.arrayUnion({
                type,
                author: userId,
                body,
                date: new Date(),
            })
        })
    }

}