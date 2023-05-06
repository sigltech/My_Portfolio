import React, {ReactNode} from "react";
import {CardContent, CardContentProps} from "@mui/material";
import {styled} from "@mui/material/styles";
interface ContentRowProps extends CardContentProps {
    children: ReactNode;
}
const ContentRow: React.FC<ContentRowProps> = ({ children, ...props }) => {
    return (
        <StyledContentRow {...props}>{children}</StyledContentRow>
    )
}

const StyledContentRow = styled(CardContent)`
  /* Add any additional styles you want using the css helper */
  ${({ classes }) => classes}
`

export default ContentRow;