//Libraries
import { useState, useEffect } from 'react'
//Components
import Avatar from '../Avatar';
//Styles
import * as S from './styles'

export function ChatList({ children }) {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    );
}

export function ChatListItem({ active, onClick, data }) {
    const [time, setTime] = useState('');

    useEffect(() => {
        if (data.lastMessageDate > 0) {
            let date = new Date(data.lastMessageDate.seconds * 1000);
            let hours = date.getHours();
            let minutes = date.getMinutes();

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;

            setTime(`${hours}:${minutes}`)
        }
    }, [data])

    return (
        <S.Container
            active={active}
            onClick={onClick}
        >
            <Avatar
                src={data.image}
                width={50}
                height={50}
            />
            <S.Lines>
                <S.Line>
                    <S.Name>{data.title}</S.Name>
                    <S.Date>{time}</S.Date>
                </S.Line>
                <S.Line>
                    <S.Message>
                        <S.TextMessage>{data.lastMessage}</S.TextMessage>
                    </S.Message>
                </S.Line>
            </S.Lines>
        </S.Container>
    );
}