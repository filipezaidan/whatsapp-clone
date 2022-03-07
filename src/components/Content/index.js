//Components
import ChatIntro from '../../components/ChatIntro';
import ChatWindow from '../ChatWindow';
//Styles
import * as S from './styles'

export default function Content({ isMessage, contact }) {
    return (
        <S.Container>
            {isMessage ?
                <ChatWindow
                    contact={contact}
                />
                :
                <ChatIntro />
            }
        </S.Container>
    );
}