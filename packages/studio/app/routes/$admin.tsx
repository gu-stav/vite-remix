import { Outlet } from "@remix-run/react";

export default function AdminLayout() {
    return <>
        <h1>ADMIN</h1>
        <Outlet />
    </>
}
