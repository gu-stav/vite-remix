import * as React from 'react';

import { Box, Text } from 'ui';

export interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <Box
      asChild
      backgroundColor="primary200"
      borderRadius={1}
      paddingBlock={1}
      paddingInline={2}
    >
      <Text size={1} transform="uppercase">
        {children}
      </Text>
    </Box>
  );
}
