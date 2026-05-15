/// <reference types="node" />
import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";
import { PaymentContext } from "./app/PaymentContext";

const provider = process.argv[2]?.toLowerCase() || "stripe";

const factories = {
  stripe: new StripeFactory(),
  paypal: new PaypalFactory(),
  apple: new AppleFactory(),
};

const factory =
  factories[provider as keyof typeof factories] ?? new StripeFactory();

const context = new PaymentContext(factory);
context.processPayment(100);
