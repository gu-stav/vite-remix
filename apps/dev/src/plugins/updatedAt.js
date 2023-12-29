export const updatedAt = () => (config) => ({
    ...config,
    contentTypes: config.contentTypes.map((contentType) => ({
        ...contentType,
        attributes: [
            ...contentType.attributes,
            {
                type: 'date',
                name: 'updatedAt'
            }
        ]
    }))
})
