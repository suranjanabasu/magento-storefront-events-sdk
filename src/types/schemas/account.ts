import { Address } from ".";

export type Account = {
    firstName: string;
    lastName: string;
    billingAddress?: Address;
    shippingAddress?: Address;
    emailAddress?: string;
    phoneNumber?: string;
    company?: string;
    userType?: string;
    customerGroup?: string;
};
