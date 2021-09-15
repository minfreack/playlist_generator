import styled from 'styled-components';

export const SectionFlex = styled.div`
display: flex;
flex-direction: ${props => props.direction};
justify-content: ${props => props.justify};
flex-wrap: ${props => props.wrap};
align-items: ${props => props.align};
margin: ${props => props.margin};
padding: ${props => props.padding};
gap: ${props => props.gap}
`;