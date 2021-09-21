import React from 'react';
import styles from "./Button.module.scss"

const Button = ({
    type,
    href,
    classes,
    onClick,
    tag = "button",
    children,
    ...props
}) => {
    let CustomTag = tag;
    return (
        <CustomTag
            to={`${href ? href : ""}`}
            className={
                `${styles.Button} ${classes ? classes : ""} `
            }
            type={type ? type : ""}
            onClick={onClick}
            {...props}
        >
            {children}

        </CustomTag>
    )
}
export default Button;