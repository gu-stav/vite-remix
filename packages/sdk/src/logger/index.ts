export function logger() {
  return () => {
    return {
      error(...args: unknown[]) {
        console.error(...args);
      },

      info(...args: unknown[]) {
        console.info(...args);
      },
    };
  };
}
