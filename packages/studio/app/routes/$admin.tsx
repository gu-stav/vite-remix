import { Outlet } from "@remix-run/react";
import { Button, InputText } from "ui";

export function loader({ params, request }) {
    console.log({ params, url: request.urlList })

    return null;
}

export default function AdminLayout() {
    return <>
        <h1>ADMIN</h1>

        <Button>text</Button>
        <Button>text</Button>

        <InputText />

        <Outlet />
    </>
}
