import { useEffect, useState } from 'react';
import * as S from './styles'
import image from '../../assets/whatsapp-telephone.jpg'

import * as I from 'react-icons/md'


export default function ChatWindow(contact) {

    const [userSelect, setUserSelect] = useState({})

    useEffect(() => {
        setUserSelect(contact.contact)
    }, [contact])


    return (
        <S.Container>
            <S.Header>
                <S.HeaderInfo>
                    <S.Avatar
                        src={image}
                    />
                    <S.Name>{userSelect.name}</S.Name>
                </S.HeaderInfo>

                <S.HeaderButtons>
                    <S.Button>
                        <I.MdSearch
                            size={25}
                            color="#54656f"
                        />
                    </S.Button>
                    <S.Button>
                        <I.MdAttachFile
                            size={25}
                            color="#54656f"
                        />
                    </S.Button>
                    <S.Button>
                        <I.MdMoreVert
                            size={25}
                            color="#54656f"
                        />
                    </S.Button>
                </S.HeaderButtons>

            </S.Header>


            <S.Body>

            </S.Body>

            <S.Footer>
                <S.PrevInput>
                    <S.Button>
                        <I.MdInsertEmoticon
                            size={25}
                            color="#54656f"
                        />
                    </S.Button>
                </S.PrevInput>
                <S.InputArea>
                    <S.Input
                        placeholder="Digite uma mensagem"
                    />
                </S.InputArea>
                <S.PosInput>
                    <S.Button>
                        <I.MdSend
                            size={25}
                            color="#54656f"
                        />
                    </S.Button>
                </S.PosInput>

            </S.Footer>
        </S.Container>
    );
}