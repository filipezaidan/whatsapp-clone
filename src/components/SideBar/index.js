//Libraries
import { useState, useEffect, useContext } from 'react';
//Components
import Header from '../../components/Header';
import Search from '../../components/Search';
import { ChatList, ChatListItem } from '../../components/ChatList';
//Context
import { AuthContext } from '../../contexts/auth';
//Services
import api from '../../services/api';
//styles
import * as S from './styles';
import NewChat from '../NewChat';

export default function SideBar({ setMessage, setChatSelect }) {
    const { user } = useContext(AuthContext);

    const [chatList, setChatList] = useState([])
    const [listMessages, setListMessages] = useState([])
    const [activeChat, setActiveChat] = useState(null);
    const [isShowNewChat, setIsShowNewChat] = useState(false);

    useEffect(() => {
        if(user){
            let unsub = api.onChatList(user.id, setListMessages)
            return unsub;
        }
    }, [user])
    
    useEffect(() => {
        setMessage(Boolean(activeChat))
        setChatSelect(activeChat)
    }, [activeChat])

    return (
        <S.Container>
            <NewChat
                chatlist={chatList}
                user={user}
                show={isShowNewChat}
                setShow={setIsShowNewChat}
            />
            <Header
                avatar={user.avatar}
                setShowNewChat={setIsShowNewChat}
            />
            <Search />
            <ChatList>
                {listMessages.map((item, key) => (
                    <ChatListItem
                        key={key}
                        data={item}
                        active={activeChat?.chatId === listMessages[key]?.chatId}
                        onClick={() => setActiveChat(listMessages[key])}
                    />
                ))}
            </ChatList>
        </S.Container>
    );
}