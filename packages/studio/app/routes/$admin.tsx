import { Outlet, useLoaderData } from "@remix-run/react";
import { Button, InputText } from "ui";
// import { sdk } from 'sdk';

export async function loader({ params, request }) {
    const { default: config } = await import('~studio.config.js');

    // await sdk.init(config);

    // const data = await sdk.find();

    return { data: [] };
}

export default function AdminLayout() {
    const { data } = useLoaderData<typeof loader>();

    return <>
        <h1>ADMIN</h1>

        <Button>text</Button>
        <Button>text</Button>

        <InputText />

        {data.map(({ id, title }) => (
            <p>
                {id} {title}
            </p>
        ))}

        <Outlet />
    </>
}
