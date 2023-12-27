import { clsx } from 'clsx';

import { displayBlock, backgroundColorVariant, colorVariant } from './styles.css';

export function Box({ as = 'div', backgroundColor, color, children, display, className, ...props }) {
    const Tag = as;

    return <Tag className={clsx(
        backgroundColor && backgroundColorVariant[backgroundColor],
        color && colorVariant[color],
        display === 'block' && displayBlock,
        className
    )}>
        {children}
    </Tag>
}
