//Styles
import * as S from './styles'

export default function Avatar({ src, width, height }) {
    return (
        <S.Container
            src={src}
            width={width}
            height={height}
        />
    );
}


