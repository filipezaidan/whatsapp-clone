//Icones
// import DonutLargeIcon from "@mui/icons-material/DonutLarge";
// import ChatIcon from "@mui/icons-material/Chat";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import SearchIcon from "@mui/icons-material/Search";
import { MdSearch }  from 'react-icons/md'


import * as S from './styles'

export default function Search() {
    return (
        <S.Wrapper>
            <S.Container>

                <MdSearch
                // fontSize="small"
                // style={{color: '#919191'}}
                />
                

                <S.Search
                    type="search"
                    placeholder='Procurar ou começar uma nova conversa.'
                />
            </S.Container>
        </S.Wrapper>
    );
}


