import { clsx } from 'clsx';

import { Box } from "../Box/Box";

import { displayFlex, displayInlineFlex } from "./style.css";

export function Flex({ children, display = 'flex', ...props }) {
    return <Box className={clsx(
        display === 'flex' && displayFlex,
        display === 'inline-flex' && displayInlineFlex
    )} {...props}>
        {children}
    </Box>
}
