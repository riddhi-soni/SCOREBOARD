import { useEffect, useRef } from "react";

// custom hook for use for previous value in the list animation
const usePreviousValue = (value: any) => {
    const prevChildrenRef = useRef();

    useEffect(() => {
        prevChildrenRef.current = value;
    }, [value]);

    return prevChildrenRef.current;
};

export default usePreviousValue;