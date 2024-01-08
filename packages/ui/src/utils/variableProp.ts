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

    // TODO: this could be one replacement
    normalizedVariable = normalizedVariable.replace(/(^|[\s-])\S/g, (match) =>
      match.toUpperCase(),
    );
    normalizedVariable = normalizedVariable.replace('-', '');
  }

  return styles?.[`${variableName}${normalizedVariable}`] ?? false;
}
