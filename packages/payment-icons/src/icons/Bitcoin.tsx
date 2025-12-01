import * as React from "react";
import { PaymentIconProps } from "../types";

export const Bitcoin: React.FC<PaymentIconProps> = ({
  size = 40,
  title = "Bitcoin",
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
    <rect width="40" height="24" rx="3" fill="#F7931A" />
    <circle cx="12" cy="12" r="5" fill="white" />
    <text
      x="12"
      y="12"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="8"
      fontWeight="bold"
      fill="#F7931A"
    >
      ₿
    </text>
    <text
      x="65%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="7"
      fontWeight="bold"
      fill="white"
    >
      Bitcoin
    </text>
  </svg>
);
