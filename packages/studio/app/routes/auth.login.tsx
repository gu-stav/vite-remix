import { redirect } from "@remix-run/node";

export function loader() {
    return null;
}

export default function Login() {
    return <form method="post">
        <label>
            Email
            <input type="text" name="email" />
        </label>

        <label>
            Password
            <input type="text" name="password" />
        </label>

        <button type="submit">
            Submit
        </button>
    </form>
}
