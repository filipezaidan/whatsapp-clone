import { MdSearch } from 'react-icons/md'
import * as S from './styles'

export default function Search() {
    return (
        <S.Wrapper>
            <S.Container>
                <MdSearch
                />
                <S.Search
                    type="search"
                    placeholder='Procurar ou começar uma nova conversa.'
                />
            </S.Container>
        </S.Wrapper>
    );
}


