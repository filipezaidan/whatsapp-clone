//Libraries
import { useState, useEffect } from 'react';
//Components
import Header from '../../components/Header';
import Search from '../../components/Search';
import { ChatList, ChatListItem } from '../../components/ChatList';
//styles
import * as S from './styles';

export default function SideBar({ setMessage }) {

    const [listMessages, setListMessages] = useState([
        { id: 1, },
        { id: 2, },
        { id: 3, },
        { id: 4, },
    ])

    const [activeMessage, setActiveMenssage] = useState(null);

    useEffect(() => {
        setMessage(Boolean(activeMessage))
    }, [activeMessage])

    return (
        <S.Container>
            <Header />
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