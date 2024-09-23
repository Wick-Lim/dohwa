import { forwardRef, HTMLAttributes, useMemo } from "react";

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
}

const Column = forwardRef<HTMLDivElement, ColumnProps>((props, ref) => {
    const mergedClassName = useMemo(() => (
        "flex flex-col".split(" ").concat(props.className?.split(" ") ?? []).join(" ")
    ), [props.className]);

    return (
        <div ref={ref} {...props} className={mergedClassName} />
    );
});

export default Column;
