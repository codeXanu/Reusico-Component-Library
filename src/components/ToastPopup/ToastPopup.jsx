import React from "react";
import styles from "./toastPopup.module.css";
import Checkcircle from "./Toastasset/successIcon.png";
import Exclamation from "./Toastasset/warningIcon.png";
import errorIcon from "./Toastasset/error.png";
import Neutralicon from "./Toastasset/neutral.png";
import classNames from "classnames";

function Toast({ children, variant, message, position = "top-right", duration = 3000 }) {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  const toastVariant =
    variant === "success"
      ? { defaultMessage: "Success", icon: Checkcircle, class: styles.toastSuccess }
      : variant === "warning"
      ? { defaultMessage: "Warning", icon: Exclamation, class: styles.toastWarning }
      : variant === "error"
      ? { defaultMessage: "Error", icon: errorIcon, class: styles.toastError }
      : variant === "neutral"
      ? { defaultMessage: "Information", icon: Neutralicon, class: styles.toastNeutral }
      : "";

  const toastTitle = message ? message : variant ? toastVariant.defaultMessage : "";
  const allClasses = classNames(styles.toast, toastVariant.class, styles[position]);

  return (
    <div className={allClasses}>
      <h3>
        <img src={variant ? toastVariant.icon : Checkcircle} alt="toast-icon" />
        {toastTitle ? toastTitle : "Success"}
      </h3>
      {children && <p>{children}</p>}
    </div>
  );
}

export default Toast;
