export type Order = {
    appliedCouponCode: string;
    email: string;
    grandTotal: number;
    orderId: number;
    otherTax: number;
    paymentMethodCode: string;
    paymentMethodName: string;
    salesTax: number;
    subtotalExcludingTax: number;
    subtotalIncludingTax: number;
};
