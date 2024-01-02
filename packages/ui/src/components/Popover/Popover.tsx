import * as Popover from '@radix-ui/react-popover';

import { Box } from '../Box';

export function Root({ children }) {
    return (
        <Popover.Root>
            {children}
        </Popover.Root>
    )
}

export function Trigger({ children, ...props }) {
    return (
        <Popover.Trigger asChild>
            <Box asChild {...props}>
                {children}
            </Box>
        </Popover.Trigger>
    )
}

export function Portal({ children }) {
    return (
        <Popover.Portal>
            <Popover.Content>
                {children}
            </Popover.Content>
        </Popover.Portal>
    )
}
