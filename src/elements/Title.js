import styled from "styled-components"

const Title = styled.h1`

font-weight: 400;
margin: 0.5rem 0;

`;

const LargeTitle = styled(Title)`
font-size: 6rem;

@media (max-width: ${props => props.theme.mobileBreakpoint}){
    font-size: 4rem;
}
`;

const SmallTitle = styled(Title)`
font-size: 3.5rem;
margin: 2rem 0rem;
@media (max-width: ${props => props.theme.mobileBreakpoint}){
    font-size: 2.5rem;
}
`;


export {
    Title,
    LargeTitle,
    SmallTitle
};