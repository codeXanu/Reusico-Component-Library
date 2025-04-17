import React from "react";
import styles from "./badge.module.css"; // Import the CSS Module
import classNames from "classnames"; // You can still use classnames to combine dynamic styles

function Badge({ children, color, type }) {
  // Use CSS Module classes for color and type
  let badgeColor = color ? styles[color] : "";
  let badgeType = type ? styles[type] : "";

  // Combine the base 'badge' class with the dynamic ones
  const allClasses = classNames(styles.badge, badgeColor, badgeType);

  return (
    <div className={allClasses}>
      {children}
    </div>
  );
}

export default Badge;