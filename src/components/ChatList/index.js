//Libraries
import { useState, useEffect } from 'react'
//Components
import Avatar from '../Avatar';
//Utils
import utils from '../../utils/functions';
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
            setTime(utils.handleGenerateTimeHours(data.lastMessageDate.seconds))
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