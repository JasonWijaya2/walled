/* eslint-disable no-unused-vars */

import React from "react";
import { Form } from "react-bootstrap";
import NumInputComponent from "../NumInputComponent/NumInputComponent";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";
import helpers from "../../../helpers/helpers";
import CustomTag from "../CustomTag/CustomTag";

const InputTypeComponent = ({
    type,
    value,
    setValue,
    isObject = false,
    propertyName,
    setOtherState = [],
    placeholder,
    isUpperCase = false,
    stringify = false,
    decimalPlace = 2,
    useBooleanLabel = false,
    selectLabelName,
    selectLabelId,
    isSelectValueObject = true,
    isSelectClearable = false,
    selectOptions = [],
    ...rest
}) => {
    return (
        <>
            {type === "SHORT TEXT" && (
                <Form.Control
                    type="text"
                    placeholder={placeholder}
                    value={isObject ? value[propertyName] : value}
                    onChange={(e) => {
                        const tmp = isUpperCase ? e.target.value.toUpperCase() : e.target.value;

                        let otherState = {};
                        if (setOtherState && setOtherState.length > 0) {
                            setOtherState.forEach((rs) => {
                                otherState = { ...otherState, [rs.name]: rs.value };
                            });
                        }

                        if (isObject) {
                            setValue({ ...value, [propertyName]: tmp, ...otherState });
                        } else setValue(tmp);
                    }}
                    {...rest}
                />
            )}

            {type === "PARAGRAPH" && (
                <Form.Control
                    as="textarea"
                    placeholder={placeholder}
                    value={isObject ? value[propertyName] : value}
                    onChange={(e) => {
                        const tmp = isUpperCase ? e.target.value.toUpperCase() : e.target.value;

                        let otherState = {};
                        if (setOtherState && setOtherState.length > 0) {
                            setOtherState.forEach((rs) => {
                                otherState = { ...otherState, [rs.name]: rs.value };
                            });
                        }

                        if (isObject) {
                            setValue({ ...value, [propertyName]: tmp, ...otherState });
                        } else setValue(tmp);
                    }}
                    {...rest}
                />
            )}

            {type === "DATE" && (
                <Form.Control
                    type="date"
                    value={
                        isObject
                            ? value[propertyName]
                                ? helpers.str2DatetimeInput(value[propertyName], "date")
                                : null
                            : value
                                ? helpers.str2DatetimeInput(value, "date")
                                : null
                    }
                    onChange={(e) => {
                        const tmp = helpers.strDate2UtcDate(e.target.value);
                        const newTmp = stringify ? tmp.toISOString() : tmp;

                        let otherState = {};
                        if (setOtherState && setOtherState.length > 0) {
                            setOtherState.forEach((rs) => {
                                otherState = { ...otherState, [rs.name]: rs.value };
                            });
                        }

                        if (isObject) {
                            setValue({ ...value, [propertyName]: newTmp, ...otherState });
                        } else setValue(newTmp);
                    }}
                    {...rest}
                />
            )}

            {type === "DATETIME" && (
                <Form.Control
                    type="datetime-local"
                    value={
                        isObject
                            ? value[propertyName]
                                ? helpers.str2DatetimeInput(value[propertyName])
                                : null
                            : value
                                ? helpers.str2DatetimeInput(value)
                                : null
                    }
                    onChange={(e) => {
                        const tmp = new Date(e.target.value);
                        const newTmp = stringify ? tmp.toISOString() : tmp;

                        let otherState = {};
                        if (setOtherState && setOtherState.length > 0) {
                            setOtherState.forEach((rs) => {
                                otherState = { ...otherState, [rs.name]: rs.value };
                            });
                        }

                        if (isObject) {
                            setValue({ ...value, [propertyName]: newTmp, ...otherState });
                        } else setValue(newTmp);
                    }}
                    {...rest}
                />
            )}

            {["WHOLE NUMBER (INTEGER)", "DECIMAL (FLOAT)"].includes(type) && (
                <NumInputComponent
                    placeholder={placeholder}
                    value={value}
                    setValue={setValue}
                    isObject={isObject}
                    propertyName={propertyName}
                    decimalPlace={type === "DECIMAL (FLOAT)" ? decimalPlace : 0}
                    stringify={stringify}
                    setOtherState={setOtherState}
                    {...rest}
                />
            )}

            {["TRUE/FALSE", "YES/NO"].includes(type) && (
                <div className="d-flex align-items-center">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label={useBooleanLabel && (
                            <CustomTag
                                text={
                                    isObject
                                        ? stringify
                                            ? value[propertyName] === "true"
                                                ? type.split("/")[0]
                                                : type.split("/")[1]
                                            : value[propertyName]
                                                ? type.split("/")[0]
                                                : type.split("/")[1]
                                        : stringify
                                            ? value === "true"
                                                ? type.split("/")[0]
                                                : type.split("/")[1]
                                            : value
                                                ? type.split("/")[0]
                                                : type.split("/")[1]
                                }
                                color={
                                    isObject
                                        ? stringify
                                            ? value[propertyName] === "true"
                                                ? "green"
                                                : "gray"
                                            : value[propertyName]
                                                ? "green"
                                                : "gray"
                                        : stringify
                                            ? value === "true"
                                                ? "green"
                                                : "gray"
                                            : value
                                                ? "green"
                                                : "gray"
                                }
                            />
                        )}
                        checked={
                            isObject
                                ? stringify
                                    ? value[propertyName] === "true"
                                    : value[propertyName]
                                : stringify
                                    ? value === "true"
                                    : value
                        }
                        onChange={(e) => {
                            const tmp = stringify ? `${e.target.checked}` : e.target.checked;
                            let otherState = {};
                            if (setOtherState && setOtherState.length > 0) {
                                setOtherState.forEach((rs) => {
                                    otherState = { ...otherState, [rs.name]: rs.value };
                                });
                            }

                            if (isObject) {
                                setValue({ ...value, [propertyName]: tmp, ...otherState });
                            } else setValue(tmp);
                        }}
                    />
                </div>
            )}

            {type === "PHONE NUMBER" && (
                <PhoneNumberInput
                    value={value}
                    setValue={setValue}
                    isObject={isObject}
                    propertyName={propertyName}
                    setOtherState={setOtherState}
                />
            )}

            {type === "SINGLE SELECT" && (
                <Form.Select
                    value={isObject ? value[propertyName]?.value : value}
                    onChange={(e) => {
                        let otherState = {};
                        if (setOtherState && setOtherState.length > 0) {
                            setOtherState.forEach((rs) => {
                                otherState = { ...otherState, [rs.name]: rs.value };
                            });
                        }

                        const selectedOption = selectOptions.find(
                            (option) => option.value === e.target.value
                        );
                        if (isObject) {
                            setValue({
                                ...value,
                                [propertyName]: selectedOption,
                                [`${propertyName}Id`]: selectedOption?.value,
                                ...otherState,
                            });
                        } else setValue(selectedOption?.value);
                    }}
                    {...rest}
                >
                    <option value="">Select an option</option>
                    {selectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Form.Select>
            )}
        </>
    );
};

export default InputTypeComponent;
