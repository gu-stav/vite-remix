import { btn } from "./custom.css";

interface CustomProps {
    hello: boolean;
};

export function Custom(props: CustomProps) {
    return <button className={btn}>
        Hello
    </button>;
}
