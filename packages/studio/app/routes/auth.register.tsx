import type { ActionFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { Button, InputText, Flex, Text } from 'ui';

import { init } from '../../src/lib/sdk.server';
import { Field } from '../../src/components/Field';
import { cookie } from '../../src/lib/auth.server';

export async function action({ request }: ActionFunctionArgs) {
  let user = null;
  const sdk = await init();

  try {
    user = await sdk.create({
      contentType: '_users',
      data: await request.formData(),
    });
  } catch (error) {
    return json(
      {
        errors: error.errors.reduce((acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {}),
      },
      400,
    );
  }

  try {
    const token = await sdk.login({
      data: {
        email: user.email,
        password: user.password,
      },
    });

    // TODO: redirect to :admin endpoint defined by the config
    return redirect('/admin/', {
      headers: {
        'Set-Cookie': await cookie.serialize(token),
      },
    });
  } catch (error) {}
}

export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <Flex direction="column" gap={4}>
      <Text asChild>
        <h1>Register</h1>
      </Text>

      <Flex asChild direction="column" gap={4}>
        <Form method="post">
          <Field.Root direction="column" gap={1}>
            <Field.Title>
              Email Address
              <Field.Required>Required</Field.Required>
            </Field.Title>
            <InputText name="email" id="email" />

            {actionData?.errors?.email && (
              <Field.Error>{actionData.errors.email}</Field.Error>
            )}
          </Field.Root>

          <Field.Root direction="column" gap={1}>
            <Field.Title>Password</Field.Title>
            <InputText type="password" name="password" id="password" />

            {actionData?.errors?.password && (
              <Field.Error>{actionData.errors.password}</Field.Error>
            )}
          </Field.Root>

          <Button type="submit">Register</Button>
        </Form>
      </Flex>
    </Flex>
  );
}
