import * as React from "react";

export interface PaymentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  title?: string;
}

export type PaymentIconStyle = "flat" | "mono" | "outline" | "single";

export type PaymentBrand =
  | "visa"
  | "mastercard"
  | "amex"
  | "unionpay"
  | "paypal"
  | "alipay"
  | "diners"
  | "discover"
  | "elo"
  | "hipercard"
  | "jcb"
  | "maestro"
  | "maestro-old"
  | "mastercard-old"
  | "verve"
  | "security-code"
  | "default"
  | "bkash"
  | "nagad"
  | "rocket"
  | "upay"
  | "dutch-bangla-rocket";
