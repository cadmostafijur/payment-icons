import * as React from "react";
import { PaymentIconProps } from "../types";

export const ApplePay: React.FC<PaymentIconProps> = ({
  size = 40,
  title = "Apple Pay",
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
    <rect width="40" height="24" rx="3" fill="#000000" />
    <text
      x="30%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="14"
      fill="white"
    >
      
    </text>
    <text
      x="70%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="8"
      fontWeight="bold"
      fill="white"
    >
      Pay
    </text>
  </svg>
);
