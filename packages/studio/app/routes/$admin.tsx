import { Outlet } from "@remix-run/react";

export function loader({ params, request }) {
    console.log({ params, url: request.urlList })

    return null;
}

export default function AdminLayout() {
    return <>
        <h1>ADMIN</h1>
        <Outlet />
    </>
}
