import React from "react";
import styles from "./Testimonial.module.css";

function TestimonialText({ children }) {
  return (
    <p className={styles.contentText}>
      {children ||
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. Lorem. lorem40"}
    </p>
  );
}

export default TestimonialText;
