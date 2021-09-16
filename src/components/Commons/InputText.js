import styled from 'styled-components';

export const InputText = styled.input`
outline: none;
padding: .75rem 1rem;
border-radius: .75rem;
border: 0;
margin: 1rem;
font-size: 1.1rem;
font-weight: 500;
width: ${props => props.width};
&::placeholder{
	color: #acacac;
}
`;