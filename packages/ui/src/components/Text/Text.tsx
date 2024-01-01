export function Text({ as = 'span', children }) {
    const Tag = `${as}`;

    return <Tag>
        {children}
    </Tag>
}
