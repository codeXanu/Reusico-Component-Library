import React from "react";
import styles from "./banner.module.css"; // Import the CSS Module
import Checkcircle from "./BannerAsset/Check-circle.png";
import Exclamation from "./BannerAsset/Exclamation.png";
import errorIcon from "./BannerAsset/errorIcon.png";
import Neutralicon from "./BannerAsset/Neutralicon.png";
import classNames from "classnames";

function Banner({ children, variant, title }) {
  const bodyText = children ? children : "It is working";

  const bannerVariant =
    variant === "success"
      ? { defaultTitle: "Congratulations!", icon: Checkcircle, class: styles.success }
      : variant === "warning"
      ? { defaultTitle: "Attention Needed", icon: Exclamation, class: styles.warning }
      : variant === "error"
      ? { defaultTitle: "There is a problem with your application", icon: errorIcon, class: styles.error }
      : variant === "neutral"
      ? { defaultTitle: "Update available", icon: Neutralicon, class: styles.neutral }
      : "";

  const bannerTitle = title ? title : variant ? bannerVariant.defaultTitle : "";

  const allClasses = classNames(styles.banner, bannerVariant.class);

  return (
    <div className={allClasses}>
      <h3>
        <img src={variant ? bannerVariant.icon : Checkcircle} alt="banner-icon" />
        {bannerTitle ? bannerTitle : "Congratulations!"}
      </h3>
      {children && <p>{children}</p>}
    </div>
  );
}

export default Banner;
