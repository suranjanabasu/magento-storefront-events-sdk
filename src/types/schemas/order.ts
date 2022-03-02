export type Order = {
    appliedCouponCode: string;
    email: string;
    grandTotal: number;
    orderId: number;
    otherTax: number;
    paymentMethodCode: string; // deprecated - use payments instead
    paymentMethodName: string; // deprecated - use payments instead
    payments?: Payment[];
    salesTax: number;
    shipping?: Shipping;
    subtotalExcludingTax: number;
    subtotalIncludingTax: number;
};

export type Payment = {
    paymentMethodCode: string;
    paymentMethodName: string;
};

export type Shipping = {
    shippingMethod?: string;
    shippingAmount?: string;
};
