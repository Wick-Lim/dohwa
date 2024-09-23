import { forwardRef, HTMLAttributes, useMemo } from "react";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
}

const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
    const mergedClassName = useMemo(() => (
        "flex flex-row".split(" ").concat(props.className?.split(" ") ?? []).join(" ")
    ), [props.className]);

    return (
        <div ref={ref} {...props} className={mergedClassName} />
    );
});

export default Row;
