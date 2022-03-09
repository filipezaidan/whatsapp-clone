//Assets
import image from '../../assets/whatsapp-telephone.jpg'
//Styles
import * as S from './styles'

export default function ChatIntro() {
    return (
        <S.Container>
            <S.Image src={image}/>

            <S.Title>Mantenha seu celular conectado</S.Title>
            <S.Subtitle>
                O Whatsapp conecta ao seu telefone para sicronizar suas mensagens.<br/>
                Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </S.Subtitle>
        </S.Container>
    );
}