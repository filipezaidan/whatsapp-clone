import styled from 'styled-components';

export const Container = styled.div`
    width: 35% ;
    max-width: 415px;
    position:  fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD ;
    transition: all ease 0.3s ;
`
export const Header = styled.div`
    display: flex;
    background-color: #00BFA5;
    align-items: center;
    padding: 60px 15px 15px 15px ;
`
export const BackButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
`
export const HeaderTitle = styled.span`
    flex: 1;
    height: 40px ;
    font-size: 19px;
    font-weight: bold ;
    line-height: 40px ;
    color: #FFF;
    margin-left: 20px;
`

export const List = styled.div`
    flex: 1;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.2)
    }
`
export const Contact = styled.div`
    display: flex;
    align-items: center;
    padding: 15px ;
    cursor: pointer;

    &&:hover{
        background-color:#F5F5F5
    }
`
export const ContactAvatar = styled.img`
    width: 50px;
    height: 50px ;
    border-radius: 50%;
    margin-right: 15px;
`
export const ContactName = styled.span`
    font-size: 17px;
    color: #000;
`


