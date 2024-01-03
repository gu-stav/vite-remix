import { Text } from '../Text';

export function Button({ children, ...props }) {
    return (
        <Text asChild display="inline-block">
            <button {...props}>
                {children}     
            </button>
        </Text>
    )
}
