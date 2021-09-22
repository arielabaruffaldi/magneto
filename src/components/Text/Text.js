import React from "react";
import styles from "./Text.module.scss";

const Text = ({
  priority,
  tag,
  children,
  size = "medium",
  weight = 600,
  opacity = 1,
  align = "left",
  hasPadding,
  classes,
  ...props
}) => {
  let CustomTag = priority ? `h${priority}` : tag;
  return (
    <CustomTag
      className={`${styles.Text} ${styles[size]} ${styles[weight]} ${classes || ""} ${hasPadding ? styles.hasPadding : ""}`}
      style={{ opacity: opacity || 1, textAlign: align, fontWeight: weight}}
      {...props}
    >
      {children}
    </CustomTag>
  );
};

export default Text;
