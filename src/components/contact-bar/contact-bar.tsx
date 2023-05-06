import React from "react";
import {Envelope, GithubLogo, LinkedinLogo} from "@phosphor-icons/react";
import {styled} from "@mui/material/styles";
import './contact-bar.css';
import IconButton from "@mui/material/IconButton";
import {Typography} from "@mui/material";

const StyledDiv = styled('div')(() => ({
}))

const StyledDivContainer = styled('div')(({theme}) => ({
    position: 'fixed',
    bottom: 0,
    marginLeft: theme.spacing(2),
}))
function ContactBar({isDark}:{isDark: boolean}): React.ReactElement {

    const contactData = [
        {
            link: 'mailto:siglrichardoskar@gmail.com',
            icon: <Envelope size={32} />
        },
        {
            link: 'https://github.com/sigltech',
            icon: <GithubLogo size={32} />
        },
        {
            link: 'https://www.linkedin.com/in/richardsigl/',
            icon: <LinkedinLogo size={32} />
        },
    ]


    return (
       <StyledDivContainer>
        <StyledDiv className='socials-menu'>
            {contactData.map(data => {
                return (
                    <IconButton href={data.link}>
                        {data.icon}
                    </IconButton>
                )
            })}
            <Typography variant={'h5'}>|</Typography>
        </StyledDiv>
       </StyledDivContainer>
    )
}

export default ContactBar;