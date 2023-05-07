import React, {type CSSProperties} from 'react';
import {styled} from "@mui/material/styles";
import {CardContent, Grid, LinearProgress, Typography} from "@mui/material";
import ContentRow from "../../global-styled-components/content-row/content-row";
import {DivFlexCenterAll} from "../../global-styled-components/rs-styled-react-components";
import {HomePageProps} from "../../types/types";
//@ts-ignore
import avatar from '../../assets/avatar_richard_sigl.jpg';
import './home-page.css';

const CustomContentRow = styled(ContentRow)(({theme}) => ({
    alignItems: 'center',
    width: '70%',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))

const StyledMainContainerContent = styled(CardContent)(({theme}) => ({
    minHeight: '100vh',
    backgroundColor: 'inherit',
}))

const StyledTypography = styled(Typography)(({theme}) => ({
    margin: 0,
    marginBottom: theme.spacing(5),
    zIndex: 1,
    width: '50%',
    [theme.breakpoints.down('md')]: {
        margin: 0,
        width: '100%',
        textAlign: 'center',
        marginBottom: theme.spacing(5),
    },
}))

const StyledLinearProgress = styled(LinearProgress)(() => ({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    right: '50%',
    top: '50%',
    bottom: '50%',
    width: '50%',
    filter: 'blur(5px)',
}))

const StyledImg = styled('img')(({theme}) => ({
    position: 'absolute',
    marginRight: '30%',
    marginLeft: '80%',
    marginBottom: '50%',
    marginTop: '45%',
    width: '35%',
    borderRadius: '30%',
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
        position: 'relative',
        marginRight: 0,
        marginLeft: 0,
        width: '60%',
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(5),
    },
}))



const HomePage = ({
isLoading,
}:HomePageProps): React.ReactElement => {

    if(isLoading) {
        return (
            <StyledLinearProgress color={'primary'} />
        )
    }
    return (
        !isLoading &&(
            <StyledMainContainerContent>
                <DivFlexCenterAll className={'home-page-content-container'}>
                    <StyledImg
                        src={avatar}
                        alt={'avatar'}
                        className={'home-page-avatar'}
                    />
                    <CustomContentRow>
                        <StyledTypography variant={'h3'} className='homepage-about'>
                            <strong>Hi</strong>, I'm Richard.
                        </StyledTypography>
                        <StyledTypography variant={'h4'} className='homepage-about'>
                            A professional full-stack software engineer with a passion for frontend web development
                            working primarily with Kotlin and React.
                        </StyledTypography>
                    </CustomContentRow>
                </DivFlexCenterAll>
            </StyledMainContainerContent>
        )
    )
}

export default HomePage;