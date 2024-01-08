import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import styles from './Box.module.css';
import type { Colors, Spaces } from '../../types';
import { variableProp } from '../../utils/variableProp';

export interface BoxProps {
  asChild?: boolean;
  children: React.ReactNode;
  backgroundColor?: Colors;
  borderRadius?: 1;
  className?: string;
  cursor?: 'pointer';
  display?: 'block' | 'inline' | 'inline-block';
  flexGrow?: 0 | 1;
  flexShrink?: 0 | 1;
  marginBlock?: Spaces;
  marginBlockEnd?: Spaces;
  marginBlockStart?: Spaces;
  marginInline?: Spaces;
  marginInlineEnd?: Spaces;
  marginInlineStart?: Spaces;
  paddingBlock?: Spaces;
  paddingBlockEnd?: Spaces;
  paddingBlockStart?: Spaces;
  paddingInline?: Spaces;
  paddingInlineEnd?: Spaces;
  paddingInlineStart?: Spaces;
  width?:
    | 'auto'
    | 25
    | 50
    | 75
    | 100
    | 'fit-content'
    | 'max-content'
    | 'min-content';
  zIndex?: 'page' | 'sticky' | 'popover' | 'dialog';
}

export function Box({
  asChild,
  backgroundColor,
  borderRadius,
  children,
  cursor,
  display,
  className,
  flexGrow,
  flexShrink,
  marginBlock,
  marginBlockEnd,
  marginBlockStart,
  marginInline,
  marginInlineEnd,
  marginInlineStart,
  paddingBlock,
  paddingBlockEnd,
  paddingBlockStart,
  paddingInline,
  paddingInlineEnd,
  paddingInlineStart,
  width,
  zIndex,
  ...props
}: BoxProps) {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      className={clsx(
        variableProp(backgroundColor, 'backgroundColor', styles),
        variableProp(borderRadius, 'borderRadius', styles),
        variableProp(cursor, 'cursor', styles),
        variableProp(display, 'display', styles),
        variableProp(flexGrow, 'flexGrow', styles),
        variableProp(flexShrink, 'flexShrink', styles),
        variableProp(marginBlock, 'marginBlock', styles),
        variableProp(marginBlockEnd, 'marginBlockEnd', styles),
        variableProp(marginBlockStart, 'marginBlockStart', styles),
        variableProp(marginInline, 'marginInline', styles),
        variableProp(marginInlineEnd, 'marginInlineEnd', styles),
        variableProp(marginInlineStart, 'marginInlineStart', styles),
        variableProp(paddingBlock, 'paddingBlock', styles),
        variableProp(paddingBlockEnd, 'paddingBlockEnd', styles),
        variableProp(paddingBlockStart, 'paddingBlockStart', styles),
        variableProp(paddingInline, 'paddingInline', styles),
        variableProp(paddingInlineEnd, 'paddingInlineEnd', styles),
        variableProp(paddingInlineStart, 'paddingInlineStart', styles),
        variableProp(width, 'width', styles),
        variableProp(zIndex, 'z', styles),
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
