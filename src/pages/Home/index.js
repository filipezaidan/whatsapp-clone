//Libraries
import { useState } from 'react';
//Components
import SideBar from '../../components/SideBar';
import Content from '../../components/Content';
//Styles
import * as  S from './styles'

export default function Home() {
    const [isMessage, setMessage] = useState(false)
    const [chat, setChat] = useState()

    return (
        <S.Container>
            <SideBar
                setMessage={setMessage}
                setChatSelect={setChat}
            />
            <Content
                isMessage={isMessage}
                isChat={chat}
            />
        </S.Container>
    );
}


