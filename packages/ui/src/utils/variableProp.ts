function capitalize([first, ...rest]) {
    return first.toUpperCase() + rest.join('').toLowerCase();
  }

export function variableProp(variable, variableName, styles): string | false {
    if (variable === undefined || variable === null) {
        return false;
    }

    let normalizedVariable = variable;

    if (typeof normalizedVariable === 'string') {
        normalizedVariable = capitalize(variable);
    }

    return styles?.[`${variableName}${normalizedVariable}`] ?? false;
}
