import React from "react";
import styles from "./Testimonial.module.css";

function TestimonialName({ children }) {
  return (
    <p className={styles.contentName}>
      {children || "May Andersons"}
    </p>
  );
}

export default TestimonialName;
