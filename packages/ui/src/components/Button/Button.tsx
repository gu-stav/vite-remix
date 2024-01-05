import { Text } from '../Text';

export function Button({ children, ...props }) {
  return (
    <Text asChild display="inline-block" paddingBlock={2}>
      <button {...props}>{children}</button>
    </Text>
  );
}
