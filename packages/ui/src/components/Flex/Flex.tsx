import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box';

import styles from './Flex.module.css';

export interface FlexProps extends BoxProps {
  alignItems?: React.CSSProperties['alignItems'];
  direction?: React.CSSProperties['flexDirection'];
  gap?: React.CSSProperties['gap'];
  justifyContent?: React.CSSProperties['justifyContent'];
}

export function Flex({
  alignItems,
  asChild = false,
  children,
  className,
  direction = 'row',
  gap,
  justifyContent,
  ...props
}: FlexProps) {
  const Tag = asChild ? Slot : Box;

  return (
    <Tag
      className={clsx(
        styles.base,

        alignItems === 'start' && styles.alignItemsStart,
        alignItems === 'center' && styles.alignItemsCenter,
        alignItems === 'end' && styles.alignItemsEnd,
        alignItems === 'stretch' && styles.alignItemsStretch,

        direction === 'row' && styles.directionRow,
        direction === 'column' && styles.directionColumn,

        gap === 1 && styles.gap1,
        gap === 2 && styles.gap2,
        gap === 3 && styles.gap3,

        justifyContent === 'start' && styles.justifyContentStart,
        justifyContent === 'center' && styles.justifyContentCenter,
        justifyContent === 'end' && styles.justifyContentEnd,
        justifyContent === 'stretch' && styles.justifyContentStretch,

        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
