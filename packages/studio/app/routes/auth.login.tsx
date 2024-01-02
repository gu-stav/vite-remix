import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { Box, Button, Label, InputText, Badge, Flex } from 'ui';

export function loader() {
    return null;
}

export default function Login() {
    return <form method="post">
        <Flex direction="column">
            <Label htmlFor="email">Email Address</Label>
            <InputText name="email" id="email" />
        </Flex>

        <Flex direction="column">
            <Label htmlFor="password">Password</Label>
            <InputText type="password" name="password" id="password" />
        </Flex>

        <Box asChild>
            <Link to="/auth/forgot-password">Forgot password?</Link>
        </Box>

        <Button type="submit">
            Login
        </Button>
    </form>
}
