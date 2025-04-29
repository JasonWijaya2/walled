import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumberInput = ({
    value,
    setValue,
    propertyName,
    isObject = false,
    setOtherState = [],
    ...rest
}) => {
    return (
        <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <PhoneInput
                international
                countryCallingCodeEditable={false}
                onChange={(e) => {
                    let otherState = {};
                    if (setOtherState && setOtherState.length > 0) {
                        setOtherState.forEach((rs) => {
                            otherState = { ...otherState, [rs.name]: rs.value };
                        });
                    }

                    if (isObject) {
                        setValue({ ...value, [propertyName]: e, ...setOtherState });
                    } else setValue(e);
                }}
                value={isObject ? value[propertyName] : value}
                className="form-control"
                style={{ width: "100%" }}
                {...rest}
            />
        </div>
    );
};

export default PhoneNumberInput;
