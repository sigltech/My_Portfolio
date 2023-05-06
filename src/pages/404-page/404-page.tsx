import React, {useEffect, useState} from 'react';
import {Navigate} from "react-router-dom";
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledDivContainer = styled('div')(({theme}) => ({
    marginTop: theme.spacing(13),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
}))

const Page404 = (): React.ReactElement => {
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        setTimeout(() => {
            setCounter(counter - 1)
        }, 1000)
    },[counter])

    if(counter !== 0) {
        return (
            <StyledDivContainer>
                <Typography variant={'h2'}>Oops...</Typography>
                <Typography variant={'h4'}>Looks Like This page might not exists.</Typography>
                <Typography variant={'h6'}>redirecting back to Home in {counter}</Typography>
            </StyledDivContainer>
        )
    }

    return (
        <Navigate to={"/"} replace />
    )
}

export default Page404;