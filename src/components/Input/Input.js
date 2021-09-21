import React, { useState } from "react";
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
        <>
            {label &&
                <label className={styles.Label}>{label}</label>
            }
            <input
                className={`${styles.Input} ${styles[size]} ${classes || ""} ${hasMargin ? styles.hasMargin : ""}`}
                {...props}
                placeholder={placeholder}
                type={type}
                onChange={(e) => handleChange(e.target.value)}
            >
                {children}
            </input>
        </>
    );
};

export default Input;
