import * as RadixCheckbox from '@radix-ui/react-checkbox';

import { Box } from '../Box';

export function Checkbox({ children, id }) {
  return (
    <Box>
      <RadixCheckbox.Root id={id}>
        <RadixCheckbox.Indicator>checked</RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      <label htmlFor={id}>{children}</label>
    </Box>
  );
}
