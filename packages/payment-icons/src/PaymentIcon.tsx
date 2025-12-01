import * as React from "react";
import { PaymentIconProps } from "./types";
import { Visa } from "./icons/Visa";
import { Mastercard } from "./icons/Mastercard";
import { Amex } from "./icons/Amex";
import { UnionPay } from "./icons/UnionPay";
import { Paypal } from "./icons/Paypal";
import { Stripe } from "./icons/Stripe";
import { Bkash } from "./icons/Bkash";
import { Nagad } from "./icons/Nagad";
import { Rocket } from "./icons/Rocket";
import { ApplePay } from "./icons/ApplePay";
import { GooglePay } from "./icons/GooglePay";
import { Bitcoin } from "./icons/Bitcoin";

export type PaymentBrand =
  | "visa"
  | "mastercard"
  | "amex"
  | "unionpay"
  | "paypal"
  | "stripe"
  | "bkash"
  | "nagad"
  | "rocket"
  | "apple-pay"
  | "google-pay"
  | "bitcoin";

export interface PaymentIconGenericProps
  extends Omit<PaymentIconProps, "title"> {
  brand: PaymentBrand;
  title?: string;
}

const ICON_MAP: Record<PaymentBrand, React.FC<PaymentIconProps>> = {
  visa: Visa,
  mastercard: Mastercard,
  amex: Amex,
  unionpay: UnionPay,
  paypal: Paypal,
  stripe: Stripe,
  bkash: Bkash,
  nagad: Nagad,
  rocket: Rocket,
  "apple-pay": ApplePay,
  "google-pay": GooglePay,
  bitcoin: Bitcoin,
};

export const PaymentIcon: React.FC<PaymentIconGenericProps> = ({
  brand,
  title,
  size,
  ...rest
}) => {
  const Icon = ICON_MAP[brand];
  if (!Icon) return null;
  return <Icon size={size} title={title ?? brand} {...rest} />;
};
