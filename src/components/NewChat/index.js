//Libraries
import { useState, useEffect } from 'react';
import * as I from 'react-icons/md';
//Services
import api from '../../services/api'
//Styles
import * as S from './styles';

export default function NewChat({ user, show, setShow }) {
    const [list, setList] = useState([])

    useEffect(async () => {
        if (user) {
            const contacts = await api.getListContacts(user.id)
            setList(contacts)
        }
    }, [user])

    const handleAddNewChat = async (contactSelect) => {
        await api.addNewChat(user, contactSelect)
        handleClose();
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <S.Container style={{ left: show ? 0 : -415 }}>
            <S.Header>
                <S.BackButton onClick={handleClose}>
                    <I.MdArrowBack color="#FFF" size={25} />
                </S.BackButton>

                <S.HeaderTitle>Nova conversa</S.HeaderTitle>

            </S.Header>
            <S.List>
                {list.map((item, key) => (
                    <S.Contact
                        key={key}
                        onClick={() => handleAddNewChat(item)}
                    >
                        <S.ContactAvatar src={item.avatar} />
                        <S.ContactName>{item.name}</S.ContactName>
                    </S.Contact>
                ))}
            </S.List>
        </S.Container>
    );
}
