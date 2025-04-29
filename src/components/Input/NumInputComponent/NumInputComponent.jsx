import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import helpers from "../../../helpers/helpers";

const NumInputComponent = ({
    value,
    setValue,
    decimalPlace,
    propertyName,
    isObject = false,
    stringify = false,
    setOtherState = [],
    ...rest
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            if (inputRef.current && e.target === inputRef.current && isEditing) {
                e.preventDefault(); // Mencegah scroll hanya jika input sedang diedit
            }
        };

        inputRef.current.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener("wheel", handleWheel);
            }
        };
    }, [isEditing]);

    const handleFocus = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const parsedValue =
            decimalPlace === 0 ? parseInt(inputValue) : parseFloat(inputValue);
        const newValue = stringify ? parsedValue.toString() : parsedValue;

        let updatedState = {};
        if (isObject) {
            updatedState = { ...value, [propertyName]: newValue, ...setOtherState };
        } else {
            updatedState = newValue;
        }

        setValue(updatedState);
    };

    // Memformat nilai untuk tampilan input
    const formattedValue = isEditing
        ? isObject
            ? value[propertyName]
            : value
        : isObject
            ? typeof parseFloat(value[propertyName]) === "number" &&
                !isNaN(parseFloat(value[propertyName]))
                ? helpers.formatNumber(parseFloat(value[propertyName]), decimalPlace)
                : null
            : typeof parseFloat(value) === "number" && !isNaN(parseFloat(value))
                ? helpers.formatNumber(parseFloat(value), decimalPlace)
                : null;

    return (
        <Form.Control
            ref={inputRef}
            as="input"
            type={isEditing ? "number" : "text"}
            style={{ textAlign: "right" }}
            value={formattedValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...rest}
        />
    );
};

export default NumInputComponent;
