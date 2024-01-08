import { json, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import type { ActionFunctionArgs } from '@remix-run/node';

import { Box, Button, InputText, Flex, Text } from 'ui';

import { init } from '../../src/lib/sdk.server';
import { Field } from '../../src/components/Field';
import { cookie } from '../../src/lib/auth.server';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const sdk = await init();

  try {
    const token = await sdk.login(formData);

    return redirect('/admin/', {
      headers: {
        'Set-Cookie': await cookie.serialize(token)
      }
    });
  } catch (error) {
    return json({ errors: error.errors.reduce((acc, error) => {
      acc[error.path[0]] = error.message;
      return acc;
    }, {}) }, 400);
  }
}

export function loader() {
  // TODO: check if there is more than 1 user, otherwise redirect to `/auth/register`
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

            {actionData?.errors?.email && (
              <Field.Error>
                {actionData.errors.email}
              </Field.Error>
            )}
          </Field.Root>

          <Field.Root direction="column" gap={1}>
            <Field.Title>Password</Field.Title>
            <Field.Description>
              Please enter a valid email address.
            </Field.Description>
            <InputText type="password" name="password" id="password" />

            {actionData?.errors?.password && (
              <Field.Error>
                {actionData.errors.password}
              </Field.Error>
            )}
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
