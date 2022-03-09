//Utils
import utils from '../../utils/functions'
//Styles
import * as S from './styles'

export default function MessageItem({ data, user }) {
    console.log(data)
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
                <S.Text>{data.body}</S.Text>
                <S.Date>{utils.handleGenerateTimeHours(data.date)}</S.Date>
            </S.Container>
        </S.Wrapper>
    );
}


