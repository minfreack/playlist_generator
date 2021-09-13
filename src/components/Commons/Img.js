import styled from 'styled-components';

export const Img = styled.img`
width: ${props => props.width};
height: auto;
justify-self: center;
border-radius: ${props => props.user && '2rem'};
`;