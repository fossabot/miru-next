import { HtmlHTMLAttributes } from "react";
import { clsx } from "clsx"

export default function Button(props: HtmlHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={clsx("focus:ring-2 focus:ring-gray-500 border pl-4 pr-4 pt-2 pb-2 text-sm bg-black text-white rounded-3xl", props.className)}>
            {props.children}
        </button>
    )
}