import React from "react";
import styles from "./Testimonial.module.css";

function Testimonial({ children }) {
  return (
    <div>
      <div className={styles.testimonialContainer}>
        {children}
      </div>
    </div>
  );
}

export default Testimonial;