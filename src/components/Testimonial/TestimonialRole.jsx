import React from "react";
import styles from "./Testimonial.module.css";

function TestimonialRole({ children }) {
  return (
    <p className={styles.contentRole}>
      {children || "Workcation, CTO"}
    </p>
  );
}

export default TestimonialRole;
