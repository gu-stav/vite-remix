export function handleValidationError(error) {
  return Object.entries(error.issues).reduce((acc, [fieldName, error]) => {
    acc[fieldName] = error?._errors?.[0];
    return acc;
  }, {});
}
