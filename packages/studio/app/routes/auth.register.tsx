import { Form, useActionData } from '@remix-run/react';
import { Button, InputText, Flex, Text } from 'ui';

import { init } from '../../src/lib/sdk.server';
import { Field } from '../../src/components/Field';
import { cookie } from '../../src/lib/auth.server';

export function loader() {
  return null;
}

export default function Login() {
  const actionData = useActionData();

  return (
    <Flex direction="column" gap={4}>
      <Text asChild>
        <h1>Register</h1>
      </Text>

      <Flex asChild direction="column" gap={4}>
        <Form method="post">
          <Flex direction='row' gap={4}>
            <Field.Root direction="column" gap={1} flexGrow={1}>
              <Field.Title>
                First name
                <Field.Required>Required</Field.Required>
              </Field.Title>
              <InputText name="firstName" id="firstName" />

              {actionData?.errors?.firstName && (
                <Field.Error>
                  {actionData.errors.firstName}
                </Field.Error>
              )}
            </Field.Root>

            <Field.Root direction="column" gap={1} flexGrow={1}>
              <Field.Title>
                Last name
                <Field.Required>Required</Field.Required>
              </Field.Title>
              <InputText name="lastName" id="lastName" />

              {actionData?.errors?.lastName && (
                <Field.Error>
                  {actionData.errors.lastName}
                </Field.Error>
              )}
            </Field.Root>
          </Flex>

          <Field.Root direction="column" gap={1}>
            <Field.Title>
              Email Address
              <Field.Required>Required</Field.Required>
            </Field.Title>
            <InputText name="email" id="email" />

            {actionData?.errors?.email && (
              <Field.Error>
                {actionData.errors.email}
              </Field.Error>
            )}
          </Field.Root>

          <Field.Root direction="column" gap={1}>
            <Field.Title>Password</Field.Title>
            <InputText type="password" name="password" id="password" />

            {actionData?.errors?.password && (
              <Field.Error>
                {actionData.errors.password}
              </Field.Error>
            )}
          </Field.Root>

          <Button type="submit">Register</Button>
        </Form>
      </Flex>
    </Flex>
  )
}
