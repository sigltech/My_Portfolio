import React from 'react';
import {HomePageProps} from "../../types/types";
import {
    Grid,
    Typography,
} from "@mui/material";
import {DivFlexSpaceBetween} from "../../global-styled-components/rs-styled-react-components";
import IconButton from "@mui/material/IconButton";
//@ts-ignore untyped dependency
import DevIcon from 'devicon-react-svg';
import { resume } from '../../data/resume';
import { education } from '../../data/education';
import {
    StyledDivider,
    StyledLinearProgress,
    StyledDivContainer,
    StyledItem,
    StyledEducationItem
} from './experience-page-styled-components';

const ExperiencePage = ({
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

    const gridItemSpacing = {
        marginRight: '2rem',
    }

    const gridContainerStyle = {
        paddingLeft: 20,
        paddingRight: 20
    }

    return (
        <>
            <StyledDivContainer>
                <Typography style={{marginBottom: 20, marginLeft: 20}} variant={'h2'}>Experience</Typography>
                <Grid
                    style={gridContainerStyle}
                    container
                    direction={'row'}
                    xs={12}
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                >
                    {resume.map((item) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                style={gridItemSpacing}
                            >
                                <StyledItem key={item.id} style={{height: '100%'}}>
                                    <DivFlexSpaceBetween>
                                        <div>
                                        <Typography variant={'body1'}>{item.company}</Typography>
                                        <Typography variant={'body2'}>{item.startDate}</Typography>
                                        </div>
                                        <div style={{textAlign: 'right'}}>
                                            <Typography variant={'body1'}>{item.role}</Typography>
                                            {item.roleDetails && <Typography variant={'body1'}>{item.roleDetails}</Typography>}
                                        </div>
                                    </DivFlexSpaceBetween>
                                    <StyledDivider />
                                    <div>
                                        <ul>
                                            {item.description.map(bullet => {
                                                return (
                                                    <li style={{marginBottom: 15}}>{bullet}</li>
                                                )
                                            })}
                                        </ul>
                                        <div>
                                            <IconButton>
                                                <DevIcon icon="react"/>
                                            </IconButton>
                                        </div>
                                    </div>
                                </StyledItem>
                            </Grid>)
                        })}
                </Grid>
            </StyledDivContainer>
            <StyledDivContainer>
                <Typography style={{marginBottom: 20, marginLeft: 20}} variant={'h2'}>Education</Typography>
                <Grid
                    style={gridContainerStyle}
                    container
                    xs={12}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {education.map((item) => {
                        return (
                            <Grid item xs={12} style={gridItemSpacing}>
                                <StyledEducationItem key={item.id}>
                                    <DivFlexSpaceBetween>
                                        <div>
                                            <Typography variant={'body1'}>{item.institution}</Typography>
                                            <Typography variant={'body2'}>{item.degreeLevel}</Typography>
                                        </div>
                                        <div style={{textAlign: 'right'}}>
                                            <Typography variant={'body1'}>{item.course}</Typography>
                                            <Typography variant={'body1'}>Graduated - {item.graduated}</Typography>
                                        </div>
                                    </DivFlexSpaceBetween>
                                </StyledEducationItem>
                            </Grid>)
                    })}
                </Grid>
            </StyledDivContainer>
    </>
            )

}

export default ExperiencePage;