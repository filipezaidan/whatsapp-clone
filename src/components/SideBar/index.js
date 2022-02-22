//Components
import Header from '../../components/Header';
import Search from '../../components/Search';
import { ChatList, ChatListItem } from '../../components/ChatList';
//styles
import * as S from './styles';

export default function SideBar() {
    return (
        <S.Container>
            <Header />
            <Search />
            <ChatList>
                <ChatListItem></ChatListItem>
                <ChatListItem></ChatListItem>
                <ChatListItem></ChatListItem>
                <ChatListItem></ChatListItem>
                <ChatListItem></ChatListItem>
                <ChatListItem></ChatListItem>
                <ChatListItem></ChatListItem>
                <ChatListItem></ChatListItem>
                <ChatListItem></ChatListItem>
                <ChatListItem></ChatListItem>
            </ChatList>
        </S.Container>
    );
}