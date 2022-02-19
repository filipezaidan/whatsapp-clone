import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #EDEDED ;
`;
export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    max-width: 415px;
    border-right: 1px solid #DDD;
`;
export const Header = styled.header`
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`
export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
`
export const Buttons = styled.div`
    display: flex;
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-left: 10px;
`


