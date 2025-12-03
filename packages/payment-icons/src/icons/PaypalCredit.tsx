import * as React from "react";
import { PaymentIconProps } from "../types";

export const PaypalCredit: React.FC<PaymentIconProps> = ({
  size = 40,
  title = "PayPal Credit",
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
    <rect width="40" height="24" rx="3" fill="#003087" />
    <text
      x="50%"
      y="35%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="6"
      fontWeight="bold"
      fill="white"
    >
      PAYPAL
    </text>
    <text
      x="50%"
      y="65%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="5"
      fontWeight="bold"
      fill="#FFD700"
    >
      CREDIT
    </text>
  </svg>
);
