export interface Config {
  contentTypes: {
    test: Test;
  };
}
export interface Test {
  test: string;
}

declare module 'unding-studio-remix' {
  export interface GeneratedTypes extends Config {}
}
