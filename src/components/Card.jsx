import React from "react";
import "../css/Card.css";

export const Card = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`card ${className}`} {...props} />
));

export const CardHeader = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`card-header ${className}`} {...props} />
));

export const CardTitle = React.forwardRef(({ className = "", ...props }, ref) => (
  <h3 ref={ref} className={`card-title ${className}`} {...props} />
));

export const CardDescription = React.forwardRef(({ className = "", ...props }, ref) => (
  <p ref={ref} className={`card-description ${className}`} {...props} />
));

export const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`card-content ${className}`} {...props} />
));

export const CardFooter = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`card-footer ${className}`} {...props} />
));
