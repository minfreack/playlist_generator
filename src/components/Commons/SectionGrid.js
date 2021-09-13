import styled from 'styled-components';

export const SectionGrid = styled.div`
display: grid;
grid-template-columns: ${props => props.twoColumns ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
padding: ${props => props.variant ? '1rem 3.5rem' : '3.5rem 2rem'};
gap: ${props => props.variant ? '3.5rem' : 0};
`;