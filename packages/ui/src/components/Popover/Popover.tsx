import * as Popover from '@radix-ui/react-popover';

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
            <button className="IconButton" {...props}>
                {children}
            </button>
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
