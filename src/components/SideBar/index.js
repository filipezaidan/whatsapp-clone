//Libraries
import { useState, useEffect } from 'react';
//Components
import Header from '../../components/Header';
import Search from '../../components/Search';
import { ChatList, ChatListItem } from '../../components/ChatList';
//styles
import * as S from './styles';
import NewChat from '../NewChat';

export default function SideBar({ setMessage, setContact }) {

    const [listMessages, setListMessages] = useState([
        { id: 1, name: "Filipe Zaidan",  },
        { id: 2, name: "Filipe Zaidan 2", },
        { id: 3, name: "Filipe Zaidan 3",},
        { id: 4, name: "Filipe Zaidan 4",},
    ])
    const [activeMessage, setActiveMenssage] = useState(null);
    const [isShowNewChat, setIsShowNewChat] = useState(false);

    useEffect(() => {
        setMessage(Boolean(activeMessage))
        console.log("active:",activeMessage)
        setContact(activeMessage)
    }, [activeMessage])

    return (
        <S.Container>
            <NewChat
                show={isShowNewChat}
                setShow={setIsShowNewChat}
            />
            <Header 
                setShowNewChat={setIsShowNewChat}
            />
            <Search />
            <ChatList>
                {listMessages.map((item, key) => (
                    <ChatListItem
                        key={key}
                        active={activeMessage?.id === listMessages[key].id}
                        onClick={() => setActiveMenssage(listMessages[key])}
                    />
                ))}
            </ChatList>
        </S.Container>
    );
}