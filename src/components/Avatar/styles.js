import styled from 'styled-components';

export const Container = styled.img`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border-radius: 50%;
    cursor: pointer;
`