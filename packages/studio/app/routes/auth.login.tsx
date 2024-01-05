import { json, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import type { ActionFunctionArgs } from "@remix-run/node";

import { Box, Button, Label, InputText, Flex, Text } from 'ui';
import { sdk } from 'sdk';

export async function action({ request }: ActionFunctionArgs) {
  const { default: config } = await import('~studio.config.js');
  const formData = await request.formData();

  await sdk.init(config);

  try {
    await sdk.login(formData);

    // set auth cookie

    return redirect('/admin/');
  } catch(error) {
    return json({ errors: [error] });
  }
}

export function loader() {
  return null;
}

export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <Flex direction="column">
      <Text asChild>
        <h1>Login</h1>
      </Text>

      <Flex asChild direction="column" gap={1}>
        <Form method="post">
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
        </Form>
      </Flex>
    </Flex>
  );
}
