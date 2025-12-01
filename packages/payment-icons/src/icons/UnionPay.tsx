import * as React from "react";
import { PaymentIconProps } from "../types";

export const UnionPay: React.FC<PaymentIconProps> = ({
  size = 40,
  title = "UnionPay",
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
    <rect width="40" height="24" rx="3" fill="#002B7A" />
    <circle cx="12" cy="12" r="4" fill="#E21836" />
    <circle cx="20" cy="12" r="4" fill="#00447C" />
    <text
      x="75%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="6"
      fontWeight="bold"
      fill="white"
    >
      UnionPay
    </text>
  </svg>
);
