import {styled} from "@mui/material/styles";
import {Divider, LinearProgress, Paper} from "@mui/material";

const StyledDivider = styled(Divider)(({theme}) => ({
    marginTop: theme.spacing(2)
}))

const StyledLinearProgress = styled(LinearProgress)(() => ({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    right: '50%',
    top: '50%',
    bottom: '50%',
    width: '50%'
}))

const StyledDivContainer = styled('div')(({theme}) => ({
    marginTop: theme.spacing(13),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    minHeight: '90vh',
}))

const StyledItem = styled(Paper)(({theme}) => ({
    textAlign: 'left',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    minHeight: '300px',
}))
const StyledEducationItem = styled(Paper)(({theme}) => ({
    textAlign: 'left',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
}))

export {
    StyledDivider,
    StyledLinearProgress,
    StyledDivContainer,
    StyledItem,
    StyledEducationItem
}