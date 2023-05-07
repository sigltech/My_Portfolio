import {styled} from "@mui/material/styles";
import {Card, Typography} from "@mui/material";

const NavBarContainer = styled(Card)(({theme}) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    margin: 0,
    boxShadow: '1px 1px 15px 0px rgba(255,255,255,0.05)',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    position: 'fixed',
    top: 0
}))

const StyledHeader = styled(Typography)(({theme}) => ({
    margin: 0,
}));

const NavListItem = styled('div')(({theme}) => ({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    listStyleType: 'none',
    marginLeft: theme.spacing(2)
}))

const StyledUnorderedList = styled('ul')(() => ({
    display: 'flex',

}))

export {
    NavBarContainer,
    StyledHeader,
    NavListItem,
    StyledUnorderedList
}