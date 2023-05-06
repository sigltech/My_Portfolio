import React, {MouseEventHandler} from 'react';
import IconButton from '@mui/material/IconButton';
import {useNavigate, useLocation, Link as RouterLink} from 'react-router-dom';
import {
    Envelope,
    House,
    Moon,
    Sun,
    File
} from "@phosphor-icons/react";
import {
    NavBarContainer,
    StyledHeader,
    NavListItem,
    StyledUnorderedList
} from './navigation-bar-styled-components';
import Tooltip from '@mui/material/Tooltip';
import {styled} from "@mui/material/styles";
import {Breadcrumbs, Link, Typography} from "@mui/material";

const messages = {
    navHome: 'Home',
    navContact: 'Contact',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    experience: 'Experience',
}

interface navElementsTypes {
    name: string;
    icon: React.ReactElement,
    title: string;
    navLink: MouseEventHandler<HTMLButtonElement> | undefined;
}

const StyledIconButton = styled(IconButton)(({theme}) => ({
    color: theme.palette.text.primary
}))

const NavigationBar = ({isDarkMode, setIsDarkMode}: {
    isDarkMode: boolean,
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}): React.ReactElement => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((x) => x);

    const handleThemeChange = (): void => {
        window.localStorage.setItem('viewMode', (!isDarkMode).toString())
        setIsDarkMode(!isDarkMode);
        console.log('isDarkMode', isDarkMode)
        console.log('viewMode', window.localStorage.getItem('viewMode'))
    }

    const navElements: navElementsTypes[] = [
        {
            name: 'Home',
            icon: <House size={32} />,
            title: messages.navHome,
            navLink: () => navigate('/'),
        },
        {
            name: messages.experience,
            icon: <File size={32} />,
            title: messages.experience,
            navLink: () => navigate('/experience'),
        },
        {
            name: !isDarkMode ? messages.darkMode : messages.lightMode,
            icon: !isDarkMode ? <Moon size={32} /> : <Sun size={32} />,
            title: !isDarkMode ? messages.darkMode : messages.lightMode,
            navLink: handleThemeChange,
        },

    ]
    return (
        <NavBarContainer>
            <Breadcrumbs aria-label="breadcrumb">
                {pathNames.length > 0 ? (
                    <Link component={RouterLink} to="/">
                        Home
                    </Link>
                ) : (
                    <Typography>Home</Typography>
                )}

                {pathNames.map((name, index) => {
                    const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathNames.length - 1;
                    const label = isLast ? name : `${name}`;

                    return isLast ? (
                        <Typography key={routeTo} color="text.primary">
                            {label}
                        </Typography>
                    ) : (
                        <Link component={RouterLink} key={routeTo} to={routeTo}>
                            {label}
                        </Link>
                    );
                })}
            </Breadcrumbs>
            <StyledUnorderedList>
                {navElements.map(el => {
                    return (
                        <NavListItem>
                            <Tooltip title={el.title}>
                                <StyledIconButton
                                    onClick = {el.navLink}
                                >
                                    {el.icon}
                                </StyledIconButton>
                            </Tooltip>
                        </NavListItem>
                    )
                })}
            </StyledUnorderedList>
        </NavBarContainer>
    )
}

export default NavigationBar;