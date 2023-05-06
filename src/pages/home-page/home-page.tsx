import React, {type CSSProperties} from 'react';
import {styled} from "@mui/material/styles";
import {CardContent, Grid, LinearProgress, Typography} from "@mui/material";
import ContentRow from "../../global-styled-components/content-row/content-row";
import {DivFlexCenterAll} from "../../global-styled-components/rs-styled-react-components";
import {HomePageProps} from "../../types/types";
//@ts-ignore
import avatar from '../../assets/avatar_richard_sigl.jpg';

const CustomContentRow = styled(ContentRow)(() => ({
    alignItems: 'center',
    width: '70%',
    zIndex: 1
}))

const StyledMainContainerContent = styled(CardContent)(() => ({
    height: '100vh',
    backgroundColor: 'inherit'
}))

const StyledTypography = styled(Typography)(({theme}) => ({
    margin: 0,
    marginBottom: theme.spacing(5),
    zIndex: 1,
    width: '50%'
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



const HomePage = ({
isLoading,
}:HomePageProps): React.ReactElement => {

    const imgStyle: CSSProperties = {
        position: 'absolute',
        marginRight: '30%',
        marginLeft: '80%',
        marginBottom: '50%',
        marginTop: '45%',
        width: '35%',
        borderRadius: '30%',
        zIndex: 0
    }

    if(isLoading) {
        return (
            <StyledLinearProgress color={'primary'} />
        )
    }
    return (
        !isLoading &&(
            <Grid xs={12}>
            <StyledMainContainerContent>
                <DivFlexCenterAll>
                    <img
                        src={avatar}
                        alt={'avatar'}
                        style={imgStyle}
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
        </Grid>
        )
    )
}

export default HomePage;