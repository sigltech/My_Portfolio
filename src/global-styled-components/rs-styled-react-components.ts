import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

export const DivFlexSpaceBetween = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
}))

export const DivFlexCenterAll = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    },

}))

export const StyledRsButton = styled(Button)(({theme}) => ({
    border: `2px solid ${theme.palette.primary.main}`
}))