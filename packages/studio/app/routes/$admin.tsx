import { Outlet } from "@remix-run/react";
import { Flex } from "ui";

export function loader({ params, request }) {
    console.log({ params, url: request.urlList })

    return null;
}

export default function AdminLayout() {
    return <>
        <h1>ADMIN</h1>

        <Flex>
            adasds
            <button>text</button>
            <button>text</button>
        </Flex>

        <Outlet />
    </>
}
