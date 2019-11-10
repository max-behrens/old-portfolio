import styled from 'styled-components'
import { Github, Twitter, LinkedinIn } from 'styled-icons/fa-brands'
import { Envelope, FileAlt } from 'styled-icons/fa-solid'


const HorizontalIcons = styled.div`
display: flex;
flex-direction: row;

justify-content: space-around;
align-content: center;
align-items: center;
width: ${props => props.width || "400px"};
height: ${props => props.height || "auto"};


`;

const LandingPageIcons = styled(HorizontalIcons)`

    @media (max-width: 700px){
        width: 300px;
    }
`;

const MailIcon = styled(Envelope)`
${props => props.theme.iconMixin('4rem', 'white', '700px')}
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`, 0.5)}

`;

const GithubIcon = styled(Github)`

${props => props.theme.iconMixin('4rem', 'white', '700px')}
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`, 0.5)}
`;

const TwitterIcon = styled(Twitter)`
${props => props.theme.iconMixin('4rem', 'white', '700px')}
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`, 0.5)}
`;

const LinkedinIcon = styled(LinkedinIn)`
${props => props.theme.iconMixin('4rem', 'white', '700px')}
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`, 0.5)}

`;

const FileIcon = styled(FileAlt)`
${props => props.theme.iconMixin('4rem', 'white', '700px')}
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`, 0.5)}

`;




export {
    HorizontalIcons,
    LandingPageIcons,
    MailIcon,
    GithubIcon,
    TwitterIcon,
    LinkedinIcon,
    FileIcon,
}