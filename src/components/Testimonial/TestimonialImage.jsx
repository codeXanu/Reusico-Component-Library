import React from "react";
import styles from "./testimonial.module.css";

function TestimonialImage({ src }) {
  return (
    <div className={styles.imgContainer}>
      <img
        src={
          src ||
          "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="testimonial"
      />
    </div>
  );
}

export default TestimonialImage;