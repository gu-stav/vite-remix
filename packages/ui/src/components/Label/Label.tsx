import { Box } from "../Box"

export function Label({ children, ...props }) {
    return (
        <Box asChild {...props}>
            <label>
                {children}
            </label>
        </Box>
    )
}
