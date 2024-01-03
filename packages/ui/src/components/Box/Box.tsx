import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import styles from './Box.module.css';

export interface BoxProps {
    asChild?: boolean;
    children: React.ReactNode;
    backgroundColor?: React.CSSProperties['backgroundColor'];
    className?: string;
    display?: React.CSSProperties['display'];

    flexGrow?: 0 | 1;
    flexShrink?: 0 | 1;

    marginBlock?: React.CSSProperties['marginBlock'];
    marginBlockEnd?: React.CSSProperties['marginBlockEnd'];
    marginBlockStart?: React.CSSProperties['marginBlockStart'];
    marginInline?: React.CSSProperties['marginInline'];
    marginInlineEnd?: React.CSSProperties['marginInlineEnd'];
    marginInlineStart?: React.CSSProperties['marginInlineStart'];

    paddingBlock?: React.CSSProperties['paddingBlock'];
    paddingBlockEnd?: React.CSSProperties['paddingBlockEnd'];
    paddingBlockStart?: React.CSSProperties['paddingBlockStart'];
    paddingInline?: React.CSSProperties['paddingInline'];
    paddingInlineEnd?: React.CSSProperties['paddingInlineEnd'];
    paddingInlineStart?: React.CSSProperties['paddingInlineStart'];

    zIndex: 'page' | 'sticky' | 'popover' | 'dialog';
}

function capitalize([first, ...rest]) {
    return first.toUpperCase() + (rest.join('').toLowerCase());
}

function variableProp(variable, variableName, styles) {
    if (variable === undefined || variable === null) {
        return false;
    }

    let normalizedVariable = variable;

    if (typeof normalizedVariable === 'string') {
        normalizedVariable = capitalize(variable);
    }

    return styles?.[`${variableName}${normalizedVariable}`] ?? false;
}

export function Box({ asChild, backgroundColor, children, display, className, flexGrow, flexShrink, marginBlock, marginBlockEnd, marginBlockStart, marginInline, marginInlineEnd, marginInlineStart, paddingBlock, paddingBlockEnd, paddingBlockStart, paddingInline, paddingInlineEnd, paddingInlineStart, zIndex }: BoxProps) {
    const Tag = asChild ? Slot : 'div';

    return <Tag className={clsx(
        styles.base,

        variableProp(backgroundColor, 'backgroundColor', styles),

        display === 'inline' && styles.displayInline,
        display === 'inline-block' && styles.displayInlineBlock,

        flexGrow === 0 && styles.flexGrow0,
        flexGrow === 1 && styles.flexGrow1,

        flexShrink === 0 && styles.flexShrink0,
        flexShrink === 1 && styles.flexShrink1,

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

        variableProp(zIndex, 'z', styles),

        className,
    )}>
        {children}
    </Tag>
}
