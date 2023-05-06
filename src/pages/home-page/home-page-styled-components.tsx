import {styled} from "@mui/material/styles";
import {Card, CardContent} from "@mui/material";

const StyledPageContainer = styled(Card)(({theme}) => ({
    minHeight: '100vh',
    scrollBehavior: 'smooth',
    color: theme.palette.text.primary
}));

const StyledCardContent = styled(CardContent)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 0,
    backgroundColor: 'inherit'
}));

const MainPageContainer = styled(Card)(({theme}) => ({
    marginTop: theme.spacing(10),
    backgroundColor: 'inherit'
}))

export {
    StyledPageContainer,
    StyledCardContent,
    MainPageContainer,

}