import React, { useState } from "react";
import Text from "../Text/Text";
import styles from "./Input.module.scss";

const Input = ({
    size = "small",
    hasMargin,
    classes,
    type = "text",
    children,
    label,
    placeholder,
    handleChange,
    ...props
}) => {
    return (
        <div className={`${classes || ""}  ${type === "radio" ? styles['Input--radioContainer'] : ''} ${styles['Input--container']}`}>
            {label &&
                <Text tag="label" weight={'normal'} className={styles.Label}>{label}</Text>
            }
            <input
                className={`${styles.Input} ${styles[size]} ${hasMargin ? styles.hasMargin : ""}`}
                {...props}
                placeholder={placeholder}
                type={type}
                onChange={(e) => handleChange && handleChange(e.target.value)}
            >
                {children}
            </input>
        </div>
    );
};

export default Input;
