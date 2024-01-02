import { Outlet } from "@remix-run/react";

import { Flex } from 'ui';

export default function AuthLayout() {
    return <Flex alignItems="center" justifyContent="center">
        <Outlet />
    </Flex>
}
