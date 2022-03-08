//Libraries
import { useContext } from 'react';
//Contexts
import { AuthContext } from '../../contexts/auth';
//Styles
import * as  S from './styles'

export default function Login() {
    const { githubSignIn } = useContext(AuthContext);

    const handleLogin = () => {
        githubSignIn();
    }
    
    return (
        <S.Container>
            <S.Button onClick={handleLogin}>Login</S.Button>
        </S.Container>
    );
}


