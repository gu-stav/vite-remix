import type { SDK } from '../..';
import { factory } from './factory';
import type { Config } from '../../config/validate';

export const find = factory(async function (
  sdk: SDK,
  payload: FindArg<Config['contentTypes'][number]>,
): Promise<{}> {
  return {};
});

export interface FindArg<T extends unknown> {
  contentType: T;
  where?: object;
}
