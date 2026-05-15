import { PaymentProvider } from "../../core/PaymentProvider";

export class ApplePaymentProvider implements PaymentProvider {
  authorize(amount: number): string {
    const transactionId = crypto.randomUUID();
    console.log(`[ApplePay] Authorizing $${amount}`);
    return transactionId;
  }

  capture(transactionId: string): void {
    console.log(`[ApplePay] Capturing transaction ${transactionId}`);
  }

  refund(transactionId: string): void {
    console.log(`[ApplePay] Refunding transaction ${transactionId}`);
  }
}
