import React from "react";
import CloudUpload from "./cardAsset/Cloud-upload.png";
import styles from "./card.module.css"; // 👈 importing CSS module

function Card({ children, title, icon, onClick }) {
  const { src = CloudUpload, size = 24, backgroundColor = "#3F75FE" } = icon || {};

  return (
    <div className={styles.card}>
      <div className={styles.cardIcon} style={{ backgroundColor: backgroundColor }}>
        <img src={src} alt="Icon" style={{ width: size, height: size }} />
      </div>
      <div className={styles.cardBody} onClick={onClick}>
        <h2>{title || "Easy Deployment"}</h2>
        <p>
          {children ||
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."}
        </p>
      </div>
    </div>
  );
}

export default Card;
