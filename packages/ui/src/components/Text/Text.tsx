import { Box } from "../Box";

export function Text({ children }) {
    return <Box asChild display="inline">
        {children}
    </Box>
}
