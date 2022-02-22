import styled from 'styled-components';

export const Container = styled.header`
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