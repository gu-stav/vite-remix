import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box';

import styles from './Text.module.css';
import type { Colors, FontSizes, LineHeights } from '../../types';
import { variableProp } from '../../utils/variableProp';

export interface TextProps extends BoxProps {
  align?: 'center' | 'start' | 'end';
  color?: Colors;
  lineHeight?: LineHeights;
  size?: FontSizes;
  transform?: 'uppercase';
  weight?: 'bold' | 'normal';
}

export function Text({
  children,
  color,
  align,
  className,
  lineHeight,
  size,
  transform,
  weight,
  ...props
}: TextProps) {
  return (
    <Box
      className={clsx(
        variableProp(align, 'align', styles),
        variableProp(color, 'color', styles),
        variableProp(lineHeight, 'lineHeight', styles),
        variableProp(size, 'size', styles),
        variableProp(transform, 'transform', styles),
        variableProp(weight, 'weight', styles),
        className,
      )}
      marginBlock={0}
      {...props}
    >
      {children}
    </Box>
  );
}
