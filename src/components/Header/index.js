//Components
import Avatar from '../Avatar';
import Buttons from '../Buttons';
//Styles
import * as S from './styles';


export default function Header() {
    return (
        <S.Container>
            <Avatar
                src='https://avatars.githubusercontent.com/u/41112779?v=4'
                width={40}
                height={40}
            />
            <Buttons/>
        </S.Container>
    );
}