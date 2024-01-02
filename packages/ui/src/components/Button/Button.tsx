import { Box } from '../Box';

export function Button({ children, ...props }) {
    return (
        <Box asChild display="inline-block">
            <button {...props}>
                {children}
            </button>
        </Box>
    )
}
