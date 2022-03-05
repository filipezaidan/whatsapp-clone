import styled from 'styled-components';


export const Wrapper = styled.div`
    flex: 1;
    background-color: #FFF;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.2)
    }
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    cursor: pointer;
    padding-left: 15px;
    background-color: ${props => props.active && "#EBEBEB"};

    &&:hover{
        background-color:#EBEBEB
    }
`
export const Lines = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #EEE;
    padding-right: 15px;
    margin-left: 15px;
    flex-wrap: wrap;
    min-width: 0;
`
export const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const Name = styled.span`
    font-size: 17px;
    color: #000;
`
export const Date = styled.span`
    font-size: 12px;
    color: #999;
`
export const Message = styled.div`
    display: flex;
    width: 100%;
    font-size: 12px;
    color: #999;
`
export const TextMessage = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0
`