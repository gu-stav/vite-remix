import { redirect } from '@remix-run/node';
import { Link } from '@remix-run/react';

import { Box, Button, Label, InputText, Flex, Text } from 'ui';

export function loader() {
  return null;
}

export default function Login() {
  return (
    <Flex direction="column">
      <Text asChild>
        <h1>Login</h1>
      </Text>

      <Flex asChild direction="column" gap={1}>
        <form method="post">
          <Flex direction="column" gap={1}>
            <Label htmlFor="email">Email Address</Label>
            <InputText name="email" id="email" />
          </Flex>

          <Flex direction="column" gap={1}>
            <Label htmlFor="password">Password</Label>
            <InputText type="password" name="password" id="password" />
          </Flex>

          <Box asChild display="block">
            <Link to="/auth/forgot-password">Forgot password?</Link>
          </Box>

          <Button type="submit">Login</Button>
        </form>
      </Flex>
    </Flex>
  );
}
