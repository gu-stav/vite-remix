import type { SDK } from '../..';
import { executeAccessControl } from '../../auth/executeAccessControl';
import { SdkResponse, factory } from './factory';

export const find = factory(async function (
  sdk: SDK,
  payload: FindArg,
): Promise<SdkResponse<{}>> {
  await executeAccessControl(contentType.access?.find);

  // @ts-expect-error
  return sdk.db.find();
});

export interface FindArg<T extends unknown> {
  contentType: T;
  where?: object;
}
