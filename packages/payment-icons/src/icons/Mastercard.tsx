import * as React from "react";
import { PaymentIconProps } from "../types";

export const Mastercard: React.FC<PaymentIconProps> = ({
  size = 40,
  title = "Mastercard",
  ...svgProps
}) => (
  <svg
    width={size}
    height={(size * 24) / 40}
    viewBox="0 0 40 24"
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <rect width="40" height="24" rx="3" fill="#EB001B" />
    <circle cx="15" cy="12" r="6" fill="#FF5F00" opacity="0.8" />
    <circle cx="25" cy="12" r="6" fill="#F79E1B" opacity="0.8" />
    <text
      x="50%"
      y="85%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="5"
      fontWeight="bold"
      fill="white"
    >
      mastercard
    </text>
  </svg>
);
