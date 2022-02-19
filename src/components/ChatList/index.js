
import * as S from './styles'

export function ChatList({ children }) {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    );
}


export function ChatListItem() {
    return (
        <S.Container>
            <S.Avatar 
                src='https://avatars.githubusercontent.com/u/41112779?v=4'
            />
            <S.Lines>
                <S.Line>
                    <S.Name>Filipe Zaidan</S.Name>
                    <S.Date>22hrs</S.Date>
                </S.Line>
                <S.Line>
                    <S.Message>
                        
                        <S.TextMessage>
                            asasaaasasssasaasasasasasasasasasasasasasassasassasaasasasasassasassasasasasas
                        </S.TextMessage>
                    </S.Message>
                </S.Line>
            </S.Lines>
        </S.Container>
    );
}