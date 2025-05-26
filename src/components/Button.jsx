import React from "react";
import "../css/Button.css";

const Button = React.forwardRef(
  ({ children, variant = "default", size = "default", className = "", ...props }, ref) => {
    const classes = `btn ${variant} ${size} ${className}`.trim();
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
