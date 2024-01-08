import { Text, TextProps } from 'ui';

export interface LabelProps extends TextProps {
  htmlFor: string;
}

export function Label({ children, htmlFor, ...props }: LabelProps) {
  return (
    <Text asChild weight="bold" size={3} {...props}>
      <label htmlFor={htmlFor}>{children}</label>
    </Text>
  );
}
