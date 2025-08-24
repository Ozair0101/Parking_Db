import React from "react";
import Select from "react-select";
import Option from "./Option"; // import the custom Option component

const customStyles = {
    control: (provided) => ({
        ...provided,
        minHeight: "32px",
        height: "32px",
        display: "flex",
        alignItems: "center",
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: "32px",
        padding: "0 8px",
        display: "flex",
        alignItems: "center",
    }),
    input: (provided) => ({
        ...provided,
        margin: "0px",
        padding: "0px",
    }),
    placeholder: (provided) => ({
        ...provided,
        margin: "0px",
        padding: "0px",
        display: "flex",
        alignItems: "center",
    }),
    singleValue: (provided) => ({
        ...provided,
        margin: "0px",
        padding: "0px",
        display: "flex",
        alignItems: "center",
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        height: "32px",
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: "4px",
    }),
    clearIndicator: (provided) => ({
        ...provided,
        padding: "4px",
    }),
};

const CustomProductSelect = ({
    options1,
    placeholder,
    name,
    values,
    setFieldValue,
}) => {
    // Map the products into react-select options
    const options = options1.map((product, index) => {
        return {
            value: product.id,
            label: product.name,
        };
    });

    return (
        <Select
            styles={customStyles}
            isSearchable
            // defaultValue="asfdsa"
            options={options}
            value={values[name]}
            components={{ Option }} // use our custom option component
            onChange={(selectedOption) => {
                setFieldValue(name, selectedOption);
            }}
            placeholder={placeholder}
            className={`w-full`} // Tailwind class for full width (adjust as needed)
            required
        />
    );
};

export default CustomProductSelect;
