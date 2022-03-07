
//Libraries
import { useState } from 'react';
import * as I from 'react-icons/md';
//Styles
import * as S from './styles';

export default function NewChat({ show, setShow }) {
    const [list, setList] = useState([
        { id: 123, name: "Filipe Zaidan", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLZal2ngrRXdEebFSXKENv_Joj38zpGXhwA&usqp=CAU" },
        { id: 123, name: "Filipe Zaidan", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLZal2ngrRXdEebFSXKENv_Joj38zpGXhwA&usqp=CAU" },
        { id: 123, name: "Filipe Zaidan", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLZal2ngrRXdEebFSXKENv_Joj38zpGXhwA&usqp=CAU" },
        { id: 123, name: "Filipe Zaidan", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLZal2ngrRXdEebFSXKENv_Joj38zpGXhwA&usqp=CAU" },
        { id: 123, name: "Filipe Zaidan", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLZal2ngrRXdEebFSXKENv_Joj38zpGXhwA&usqp=CAU" },
    ])

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
                    <S.Contact key={key}>
                        <S.ContactAvatar src={item.avatar} />
                        <S.ContactName>{item.name}</S.ContactName>
                    </S.Contact>
                ))}
            </S.List>
        </S.Container>
    );
}
