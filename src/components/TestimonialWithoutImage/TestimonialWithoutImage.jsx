import React from "react";
import styles from "./TestimonialWithoutImage.module.css";

function TestimonialWithoutImage({ children, heading, name }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <p>
            {heading ?? (
              <>
                Work<span style={{ color: "#2E59F3" }}>cation</span>
              </>
            )}
          </p>
        </div>
        <p className={styles.text}>
          {children ??
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore. voluptate. Perspiciatis tempore aperiam odit pariatur voluptate, magnam qui soluta hic, enim corrupti ea!"}
        </p>
        <p className={styles.about}>
          {name ?? "May Anderson / Workcation, CTO"}
        </p>
      </div>
    </div>
  );
}

export default TestimonialWithoutImage;
