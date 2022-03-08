import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #EDEDED ;
    align-items: center;
    justify-content:  center;
`;

export const Button = styled.button`
    border: 0 ;
    outline: 0  ;
    background-color:  #049f8a;
    color: #FFF ;
    width: 80px;
    height: 30px;
    font-size: 12px ;
    border-radius: 5px ;
    cursor: pointer;
    transition:  0.3s;
    
    &&:hover{
    background-color:  #00BFA5;
    }

`