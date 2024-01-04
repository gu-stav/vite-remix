import { Box, BoxProps } from '../Box';

export interface BadgeProps extends BoxProps {}

export function Badge({ children, ...props }: BadgeProps) {
    return (
        <Box {...props}>
            {children}
        </Box>
    )
}
