import { json, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import type { ActionFunctionArgs } from '@remix-run/node';

import { Box, Button, InputText, Flex, Text } from 'ui';
import { sdk } from 'sdk';

import { Field } from '../../../src/components/Field';

export async function action({ request }: ActionFunctionArgs) {
  const { default: config } = await import('~studio.config.js');
  const formData = await request.formData();

  await sdk.init(config);

  try {
    await sdk.login(formData);

    // set auth cookie

    return redirect('/admin/');
  } catch (error) {
    return json({ errors: [error.message] });
  }
}

export function loader() {
  return null;
}

export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <Flex direction="column" gap={4}>
      <Text asChild>
        <h1>Login</h1>
      </Text>

      <Flex asChild direction="column" gap={4}>
        <Form method="post">
          <Field.Root direction="column" gap={1}>
            <Field.Title>
              Email Address
              <Field.Required>Required</Field.Required>
            </Field.Title>
            <Field.Description>
              Please enter a valid email address.
            </Field.Description>
            <InputText name="email" id="email" />
            <Field.Error>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Field.Error>
          </Field.Root>

          <Field.Root direction="column" gap={1}>
            <Field.Title>Password</Field.Title>
            <Field.Description>
              Please enter a valid email address.
            </Field.Description>
            <InputText type="password" name="password" id="password" />
          </Field.Root>

          <Box asChild display="block">
            <Link to="/auth/forgot-password">Forgot password?</Link>
          </Box>

          <Button type="submit">Login</Button>
        </Form>
      </Flex>
    </Flex>
  );
}
