//Components
import ChatIntro from '../../components/ChatIntro';
import ChatWindow from '../ChatWindow';
//Styles
import * as S from './styles'

export default function Content({ isMessage, isChat }) {
    return (
        <S.Container>
            {isMessage ?
                <ChatWindow
                    data={isChat}
                />
                :
                <ChatIntro />
            }
        </S.Container>
    );
}