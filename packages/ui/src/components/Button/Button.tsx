import { clsx } from 'clsx';

import { Text, TextProps } from '../Text';

import styles from './Button.module.css';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: TextProps['children'];
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <Text
      asChild
      borderRadius={1}
      color="primary100"
      cursor="pointer"
      display="inline-block"
      paddingBlock={2}
      size={2}
    >
      <button className={clsx(styles.base, className)} {...props}>
        {children}
      </button>
    </Text>
  );
}
