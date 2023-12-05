import { ChangeEventHandler } from 'react';
import './style.css';

type Props = {
    title: string;
    value: number;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({ title, value, onChange }: Props) {
    return (
        <>
            <label>{title}</label>
            <div className="field">
                <input
                    type="number"
                    value={value.toString()}
                    onChange={onChange}
                />
            </div>
        </>
    )
}