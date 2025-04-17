import React from "react";
import styles from "./tooltip.module.css";

function Tooltip({ children, heading, bodytext, color = "green" }) {
  const colorClass = color === "blue" ? "#1E40AF" :
    color === "purple" ? "#A9229B" :
    color === "green" ? "#47AA5D" :
    color === "black" ? "#262626" :
    color === "white" ? "#FFFFFF" :
    color === "light-blue" ? "#E0E7FF" :
    color === "light-purple" ? "#FFF3FC" :
    color === "light-green" ? "#E7FFF3" : "";

  const textColor = color === "blue" ? "#FFFFFF" :
    color === "purple" ? "#FFFFFF" :
    color === "green" ? "#FFFFFF" :
    color === "black" ? "#FFFFFF" :
    color === "white" ? "#111827" :
    color === "light-blue" ? "#1C51B9" :
    color === "light-purple" ? "#A9229B" :
    color === "light-green" ? "#137A2A" : "";

  const iconColorClass = color === "blue" ? "#7EA6F2" :
    color === "purple" ? "#F462E6" :
    color === "green" ? "#C1FFCF" :
    color === "black" ? "#C7C7C7" :
    color === "white" ? "#6B7280" :
    color === "light-blue" ? "#1C51B9" :
    color === "light-purple" ? "#C7369E" :
    color === "light-green" ? "#41A557" : "";

  return (
    <div className={styles.container}>
      {children}
      <div
        className={styles.content}
        style={{
          "--tooltip-bg": colorClass,
          "--tooltip-textColor": textColor,
        }}
      >
        <div className={styles.text}>
          <p className={styles.toptext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1" stroke={iconColorClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {heading || "Archive notes"}
          </p>
          <p className={styles.bodytext}>
            {bodytext || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dol, .orem"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
