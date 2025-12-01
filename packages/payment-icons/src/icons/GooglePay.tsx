import * as React from "react";
import { PaymentIconProps } from "../types";

export const GooglePay: React.FC<PaymentIconProps> = ({
  size = 40,
  title = "Google Pay",
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
    <rect width="40" height="24" rx="3" fill="#FFFFFF" stroke="#dadce0" strokeWidth="1" />
    <text
      x="30%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="12"
      fontWeight="bold"
      fill="#4285F4"
    >
      G
    </text>
    <text
      x="70%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="7"
      fontWeight="500"
      fill="#5F6368"
    >
      Pay
    </text>
  </svg>
);
