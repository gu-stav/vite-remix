import pino from 'pino';

export function logger() {
  return () => {
    return pino();
  };
}
