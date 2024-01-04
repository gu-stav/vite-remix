import { Box, BoxProps } from '../Box';

export interface LabelProps extends BoxProps {
  htmlFor: string;
}

export function Label({ children, htmlFor, ...props }) {
  return (
    <Box asChild {...props}>
      <label htmlFor={htmlFor}>{children}</label>
    </Box>
  );
}
