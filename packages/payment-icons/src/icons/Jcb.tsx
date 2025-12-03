import * as React from "react";
import { PaymentIconProps } from "../types";

export const Jcb: React.FC<PaymentIconProps> = ({
  size = 40,
  title = "JCB",
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
    <rect width="40" height="24" rx="3" fill="#0E4C96" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="10"
      fontWeight="bold"
      fill="white"
    >
      JCB
    </text>
  </svg>
);
