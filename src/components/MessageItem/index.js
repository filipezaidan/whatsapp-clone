//Styles
import * as S from './styles'

export default function MessageItem({ data, user }) {
    return (
        <S.Wrapper
            style={{
                justifyContent: user.id === data.author ?
                    "flex-end" : "flex-start"
            }}
        >
            <S.Container
                style={{
                    backgroundColor: user.id === data.author ?
                        "#DCF8C6" : "#FFF"
                }}
            >
                <S.Text>{data.message}</S.Text>
                <S.Date>19:00</S.Date>
            </S.Container>
        </S.Wrapper>
    );
}


