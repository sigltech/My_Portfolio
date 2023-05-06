import React from 'react';
import {NavigationBar} from "../components";
import {Outlet} from "react-router-dom";
import {StyledCardContent, StyledPageContainer} from "../pages/home-page/home-page-styled-components";
import {HomePageProps} from "../types/types";
import {StyledLinearProgress} from "../pages/experience-page/experience-page-styled-components";
import ContactBar from "../components/contact-bar/contact-bar";

const Layout = ({
isDarkMode,
setIsDarkMode,
isLoading,
setIsLoading
}:HomePageProps): React.ReactElement => {

    if(isLoading) {
        return (
            <StyledLinearProgress color={'primary'} />
        )
    }

    return (
        <>
            <StyledPageContainer>
                <StyledCardContent>
                    <NavigationBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </StyledCardContent>
                <ContactBar isDark={isDarkMode}/>
            <Outlet />
        </StyledPageContainer>
        </>
    )
}

export default Layout;