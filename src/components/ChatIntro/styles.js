import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    background-color: #F8F9FA;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 6px solid #4ADF83 ;
`

export const Image = styled.img`
    width: 250px;
    height: auto;
`;

export const Title = styled.h1`
    font-size: 32px;
    color: #525252;
    font-weight: normal;
    margin-top: 30px;
`

export const Subtitle = styled.h2`
    font-size: 14px;
    color: #777;
    font-weight: normal;
    margin-top: 20px;
    line-height: 20px;
    text-align: center;
`;