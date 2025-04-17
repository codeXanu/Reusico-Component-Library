import React from "react";
import Icon from "./TestimonialAsset/Icon.png";
import styles from "./testimonial.module.css";

function TestimonialContent({ children }) {
  return (
    <div className={styles.textContainer}>
      <img src={Icon} alt="testimonial-icon" />
      {children}
    </div>
  );
}

export default TestimonialContent;