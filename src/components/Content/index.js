//Components
import ChatIntro from '../../components/ChatIntro';

//Styles
import * as S from './styles'

export default function Content({ isMessage }) {
    return (
        <S.Container>
            {isMessage ?
                <></>
                :
                <ChatIntro />
            }
        </S.Container>
    );
}