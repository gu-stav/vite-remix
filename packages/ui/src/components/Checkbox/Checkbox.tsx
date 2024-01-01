import * as RadixCheckbox from '@radix-ui/react-checkbox';

export function Checkbox({ children, id }) {
    return (
        <div>
            <RadixCheckbox.Root id={id}>
                <RadixCheckbox.Indicator>
                    checked
                </RadixCheckbox.Indicator>
            </RadixCheckbox.Root>

            <label htmlFor={id}>
                {children}
            </label>
        </div>
    )
}
