//Components
import Avatar from '../Avatar';
import Buttons from '../Buttons';
//Styles
import * as S from './styles';

export default function Header({ avatar, setShowNewChat }) {
    return (
        <S.Container>
            <Avatar
                src={avatar}
                width={40}
                height={40}
            />
            <Buttons
                showChat={setShowNewChat}
            />
        </S.Container>
    );
}