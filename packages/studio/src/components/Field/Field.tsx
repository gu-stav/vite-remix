import * as React from 'react';
import { Box, Flex, Text } from 'ui';

import { Badge } from '../Badge';
import { Label } from '../Label';

interface ErrorProps {
  children: React.ReactNode;
}

export function Error({ children }: ErrorProps) {
  return (
    <Box
      asChild
      backgroundColor="error100"
      borderRadius={1}
      paddingBlock={2}
      paddingInline={2}
    >
      <Text color="error700" size={2}>
        {children}
      </Text>
    </Box>
  );
}

interface RootProps {
  children: React.ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <Flex direction="column" gap={1}>
      {children}
    </Flex>
  );
}

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <Label>
      <Flex alignItems="center" gap={2} justifyContent="space-between">
        {children}
      </Flex>
    </Label>
  );
}

interface DescriptionProps {
  children: React.ReactNode;
}

export function Description({ children }: DescriptionProps) {
  return (
    <Text asChild size={2}>
      <p>{children}</p>
    </Text>
  );
}

interface RequiredProps {
  children: React.ReactNode;
}

export function Required({ children }: RequiredProps) {
  return <Badge>{children}</Badge>;
}
