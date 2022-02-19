import Search from '../../components/Search';
import * as  S from './styles'
import { MdDonutLarge, MdChat, MdMoreVert } from 'react-icons/md'
import { ChatList, ChatListItem } from '../../components/ChatList';


export default function Home() {
    return (
        <S.Container>
            <S.SideBar>
                <S.Header>
                    <S.Avatar
                        src='https://avatars.githubusercontent.com/u/41112779?v=4'
                    />
                    <S.Buttons>
                        <S.Button>
                            <MdDonutLarge color="#54656f" size={25} />
                        </S.Button>
                        <S.Button>
                            <MdChat color="#54656f" size={25} />
                        </S.Button>
                        <S.Button>
                            <MdMoreVert color="#54656f" size={25} />
                        </S.Button>
                    </S.Buttons>
                </S.Header>
                <Search />
                <ChatList>
                    <ChatListItem></ChatListItem>
                    <ChatListItem></ChatListItem>
                    <ChatListItem></ChatListItem>
                    <ChatListItem></ChatListItem>
                    <ChatListItem></ChatListItem>
                </ChatList>
            </S.SideBar>
        </S.Container>
    );
}


