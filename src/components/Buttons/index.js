//Libraries
import * as I from 'react-icons/md'
//Styles 
import * as S from './styles';

export default function Buttons() {
    return (
        <S.Container>
            <S.Button>
                <I.MdDonutLarge color="#54656f" size={25} />
            </S.Button>
            <S.Button>
                <I.MdChat color="#54656f" size={25} />
            </S.Button>
            <S.Button>
                <I.MdMoreVert color="#54656f" size={25} />
            </S.Button>
        </S.Container>
    );
}


